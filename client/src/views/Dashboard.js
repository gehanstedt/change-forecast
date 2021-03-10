import React, { Component } from "react";
import axios from "axios";

import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

class Dashboard extends Component {
  state = {
    changes: [
      {
        "_id": "603a71f458d0185558f8d172",
        "number_affected": 2,
        "number": "CHG0001",
        "reviewed": "Pending",
        "company": "Corporate",
        "production_system": "true",
        "short_description": "Change description",
        "start_date": "2021-02-21T03:46:34.578Z",
        "end_date": "2021-02-21T03:46:34.578Z",
        "class": "Application",
        "location": "Location1",
        "time_zone": "America/New_York",
        "justification": "My justification1",
        "assignment_group": "@Assign Group",
        "sys_tag": "MAJOR"
      }
    ],
    changeVolume: null
    
    
   
  }

  componentDidMount () {
    console.log ('In componentDidMount ()');
//  Example on how to use the change-variable API request with major and days options
//    var request = axios.get("/api/change-variable?major=true&days=5")
//
//  How to use the change API request all changes (no filters)
//    var request = axios.get("/api/change")
//
//  How to use the change-major API request only major changes
//    var request = axios.get("/api/change-major")
//
    axios.get("/api/change-days-count?major=false&offset=0&days=6")
    .then ( request => {
      this.setState (
        {
          changeVolume: request.data
        },
        () => {
          console.log ('Here');
          console.log (this.state.changeVolume);
        }
      )
    }
    );
var changeVolume2;

    axios.get("/api/change-days-count?major=true&offset=0&days=6")
    .then ( request => {
      this.setState (
        {
          changeVolume2: request.data
        },
        () => {
          console.log ('Here');
          console.log (this.state.changeVolume2);
        }
      )
    }
    );
    
  }

  render () {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg="4" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Changes</p>
                        <Card.Title as="h4">{this.state.changeVolume}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-umbrella-13 text-success"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers"> 
                      <p className="card-category">Major</p>
                        <Card.Title as="h4">{this.state.changeVolume2}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
          
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-explore-2 text-danger"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Normal</p>
                        <Card.Title as="h4">{this.state.changeVolume - this.state.changeVolume2}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
               
              </Card>
            </Col>
            
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">2021 Changes by Month</Card.Title>
                  <p className="card-category">Major and Normal</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sept",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        series: [
                          [67, 152, 143, 240, 287, 335, 435, 437],
                          [23, 113, 67, 108, 190, 239, 307, 308],
                        ],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 800,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Open <i className="fas fa-circle text-danger"></i>
                    Click <i className="fas fa-circle text-warning"></i>
                    Click Second Time
                  </div>
                 
                </Card.Footer>
              </Card>
            </Col>
            
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">2021Changes by Day</Card.Title>
                  <p className="card-category">Major and Normal</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Jan",
                          "12:00AM",
                          "3:00PM",
                          "6:00PM",
                          "9:00PM",
                          "12:00PM",
                          "3:00AM",
                          "6:00AM",
                        ],
                        series: [
                          [287, 385, 490, 492, 554, 586, 698, 695],
                          [67, 152, 143, 240, 287, 335, 435, 437],
                          [23, 113, 67, 108, 190, 239, 307, 308],
                        ],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 800,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Open <i className="fas fa-circle text-danger"></i>
                    Click <i className="fas fa-circle text-warning"></i>
                    Click Second Time
                  </div>
                 
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            {/*  */}
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Percentage of Incidents Caused by Change</Card.Title>
                  <p className="card-category">Change Metrics</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartActivity">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "Mai",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        series: [
                          [
                            55,
                            47,
                            35,
                            75,
                            28,
                            39,
                            46,
                            31,
                            33,
                            17,
                            22,
                            43,
                          ],
                          [
                            25,
                            ,
                            ,
                            ,
                            ,
                            ,
                            ,
                            ,
                            ,
                            ,
                            ,
                            ,
                          ],
                        ],
                      }}
                      type="Bar"
                      options={{
                        seriesBarDistance: 10,
                        axisX: {
                          showGrid: false,
                        },
                        height: "245px",
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            seriesBarDistance: 5,
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    2019 <i className="fas fa-circle text-danger"></i>
                    2020
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            {/*  */}
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
