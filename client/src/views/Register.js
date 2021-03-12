import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Media,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function RegisterPage() {
  return (
    <>    
    <div className="content d-flex align-items-center">
        <Container>
        <Card className="card-register card-plain text-center">
            <Card.Body>
            <Row>
                <Col className="mr-auto" md="5" lg="4">
                <Form action="#" method="#">
                    <Card className="card-plain">
                    <div className="card-body">
                        <Form.Group>
                        <label>Username</label>
                        <Form.Control
                            placeholder="Username"
                            type="string"
                        ></Form.Control>
                        </Form.Group>

                        <Form.Group>
                        <label>Password</label>                        
                        <Form.Control
                            placeholder="Password"
                            type="password"
                        ></Form.Control>                        
                        </Form.Group>
                        
                        <Form.Group>
                        <label>Confirm Password</label>
                        <Form.Control
                            placeholder="Password Confirmation"
                            type="password"
                        ></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="card-footer text-center">
                        <Button                            
                        type="submit"
                        variant="default"
                        >
                        Register
                        </Button>
                    </div>
                    </Card>
                </Form>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        </Container>
    </div>
            
    </>
  );
}

export default RegisterPage;
