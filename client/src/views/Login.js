import React, { Component } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

class LoginPage extends Component {
  logincheck() {
    var logininput = document.getElementById("user-login-input").value;
    var passwordinput = document.getElementById("user-password-input").value;
    console.log(logininput);
    console.log(passwordinput);
    if (logininput === "sean") {alert("success")} else {alert("get outta here")};
  }

  handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

  render () {        
    return (
      <>
      
        <div className="content d-flex align-items-center p-0">
          <Container>
            <Col className="mx-auto" lg="4" md="8">
              <Form action="" className="form" method="">
                <Card className={"card-login"}>
                  <Card.Header>
                    <h3 className="header text-center">Login</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          placeholder="Enter Username"
                          type="string"
                          id="user-login-input"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          id ="user-password-input"
                        ></Form.Control>
                      </Form.Group>                    
                    </Card.Body>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto">
                    <Button onClick={() => this.handleSubmit()}>
                      Login
                    </Button>
                  </Card.Footer>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>    
      </>
    
  );
  }
}

export default LoginPage;
