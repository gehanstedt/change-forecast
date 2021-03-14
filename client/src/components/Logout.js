import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class Logout extends Component {
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

	componentDidMount() {
		console.log (`In Logout componentDidMount ()`);
		axios.get('/api/signout').then(response => {
			console.log(response.data)
			this.setState({
				loggedIn: false,
				user: null,
				redirectTo: '/guest/login'
			});
		})
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
/*		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
*/
	}
}

export default Logout;
