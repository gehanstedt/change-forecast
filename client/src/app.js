import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
// import './App.css'
// import LoginForm from './components/Login/LoginForm'
// import SignupForm from './components/SignupForm'
// import Header from './components/Header'
// import Home from './components/Home'
import AdminLayout from "layouts/Admin.js";
import GuestLayout from "layouts/Guest.js";
import LoginForm from "components/LoginForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";



const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			redirectTo: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/api/userstatus').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null,
					redirectTo: "/guest/login"
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/api/signin', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user,
						redirectTo: "/admin/dashboard"
					})
				}
			})
			.catch ((error) => {
				console.log (`In catch of _login`);
				alert ("Invalid username or password.");
				document.location.reload ();
			})
	}

	render() {
/*
		return (
			<BrowserRouter>
			<Switch>
			  <Route path="/guest" render={(props) => <GuestLayout {...props} />} />
			  <Route path="/admin" render={(props) => <AdminLayout {...props} />} />      
			  <Redirect from="/" to="/guest/login" />
			</Switch>
		  </BrowserRouter>	)

		  
*/
		console.log (`Logged in:  ${this.state.loggedIn}`);

		if (this.state.loggedIn) {
			return (
				<div>
					<Route path="/admin" render={(props) => <AdminLayout {...props} />} />   
					<Redirect from="/" to="/admin/dashboard" />
				</div>
			)
		}
		
		else {
			return (
				<div className="App">
					{/* 
					<h1>This is the main App component</h1>
					<Header user={this.state.user} />
					*/}
					{/* LINKS to our different 'pages' */}
					{/*  
					<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
					*/}
					{/*  ROUTES */}
					{/* <Route exact path="/" component={Home} /> */}
					<Route path="/guest" render={(props) => 
						<LoginForm 
							_login={this._login}
							loggedIn={this.state.loggedIn}
							{...props}
						/>} 
					/>
					<Route path="/admin" render={(props) => <AdminLayout {...props} />} />   
					<Redirect from="/" to="/guest/login" />
	
					{/* <LoginForm _login={this._login} /> */}
				</div>
			)
		}
	}
}

export default App
