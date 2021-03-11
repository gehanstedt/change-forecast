/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================


*/
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            {/* <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul> */}
            <p className="copyright text-center">
              {new Date().getFullYear()}{" "}
              <a href="https://github.com/gehanstedt/change-forecast">GT Bootcamp</a>, Built with love
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
