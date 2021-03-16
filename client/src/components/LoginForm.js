import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../assets/css/login.css'
import '../assets/css/light-bootstrap-dashboard-react.css'
import logo from '../assets/img/logo1.png'; // with import



// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<body class="colorchange">
					<div class="form-v8-content">
						<div class="form-left">
							<div class="img-fluid logoimg">
								<img src={logo} />
							</div>
						</div>
					<div class="form-right">
						<div className="LoginForm">
							<h1 class="login-banner">LOGIN</h1>
							<form class="form-detail">
								<label htmlFor="username" class="loginForm">Username: </label>
								<input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
								<br></br>
								<label htmlFor="password" class="loginForm">Password: </label>
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
								<br></br>
								<button class="loginbtn" onClick={this.handleSubmit}>Login</button>
							</form>
						</div>
					</div>
					</div>
				</body>

			)
		}
	}
}

export default LoginForm
