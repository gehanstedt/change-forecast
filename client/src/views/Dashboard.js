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

var d = new Date();
var testday= "Wednesday";
var weekday = new Array(14);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";
weekday[8] = "Monday";
weekday[9] = "Tuesday";
weekday[10] = "Wednesday";
weekday[11] = "Thursday";
weekday[12] = "Friday";
weekday[13] = "Saturday";

var today = weekday[d.getDay()];
var tomorrow = weekday[d.getDay()+1];


class Dashboard extends Component {
  state = {
    changeVolume0: null,
    changeVolume2: null,
    monthMajorVolume:null,
    monthMajorVolume2:null,
    monthMajorVolume3:null,
    allChgsVolume: null,
    allChgsVolume2: null,
    allChgsVolume3: null,

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
//  How to use change-major to get month
//    var request = axios.get("/api/change-bymonth-count?month=3&major=false&year=2021")


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
    
    axios.get("/api/change-days-count?major=false&offset=0&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume0: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=true&offset=0&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume0: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=false&offset=1&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume1: request.data
        }
      )
    }
    );

    //Gets Major changes for March 2021
    axios.get("/api/change-bymonth-count?month=3&major=true&year=2021")
    .then ( request => {
      this.setState (
        {
          monthMajorVolume: request.data
        }
      )
    }
    );

    //Gets Major changes for April 2021
    axios.get("/api/change-bymonth-count?month=4&major=true&year=2021")
    .then ( request => {
      this.setState (
        {
          monthMajorVolume2: request.data
        }
      )
    }
    );
 
    //Gets Major changes for May 2021
    axios.get("/api/change-bymonth-count?month=5&major=true&year=2021")
    .then ( request => {
      this.setState (
        {
          monthMajorVolume3: request.data
        }
      )
    }
    );
    
    //Gets All changes for March 2021
    axios.get("/api/change-bymonth-count?month=3&major=false&year=2021")
    .then ( request => {
      this.setState (
        {
          allChgsVolume: request.data
        }
      )
    }
    );

    //Gets All changes for April 2021
    axios.get("/api/change-bymonth-count?month=4&major=false&year=2021")
    .then ( request => {
      this.setState (
        {
          allChgsVolume2: request.data
        }
      )
    }
    );
 
    //Gets All changes for May 2021
    axios.get("/api/change-bymonth-count?month=5&major=false&year=2021")
    .then ( request => {
      this.setState (
        {
          allChgsVolume3: request.data
        }
      )
    }
    );

};  
  


  render () {
    var normal = this.state.allChgsVolume - this.state.monthMajorVolume
    var normal2 = this.state.allChgsVolume2 - this.state.monthMajorVolume2
    var normal3 = this.state.allChgsVolume3 - this.state.monthMajorVolume3

    

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
                  <p className="card-category">(Major, and Normal)</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Mar",
                          "Apr",
                          "May",
                        ],
                        series: [
                          [normal, normal2, normal3],
                          [this.state.monthMajorVolume, this.state.monthMajorVolume2, this.state.monthMajorVolume3]
                          

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
                    Total Changes <i className="fas fa-circle text-danger"></i>
                    Major Changes<i className="fas fa-circle text-warning"></i>
                    Normal Changes
                  </div>
                 
                </Card.Footer>
              </Card>
            </Col>
            
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">2021 Changes by Day</Card.Title>
                  <p className="card-category">(Total, Major, and Normal)</p>
                </Card.Header>
                <Card.Body>
                
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                    data={{
                        labels:[
                          "Mon",
                          "Tues",
                          "Wed",
                          "Thur",
                          "Fri",
                          "Sat",
                          "Sun",
                        ], 
                        
                        series: [
                          [],
                        
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
                          right: 60,
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
                    Total Changes <i className="fas fa-circle text-danger"></i>
                    Major Changes <i className="fas fa-circle text-warning"></i>
                    Normal Changes 
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
                  <Card.Title as="h4">Percentage of P1 Incidents Caused by Change</Card.Title>
                  <p className="card-category">P1 Incident Metrics</p>
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
                            50,
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
                    2020 <i className="fas fa-circle text-danger"></i>
                    2021
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
