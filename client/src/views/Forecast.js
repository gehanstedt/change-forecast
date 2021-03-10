import React, { Component } from "react";
import axios from "axios";

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
  CardDeck,
} from "react-bootstrap";
// App.js

import WeatherCard from '../components/weathercard/Weathercard';
import WeatherWide from '../components/weathercard/weatherwide';



var d = new Date();
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

var Sunny = 15;
var Cloudy = 25;
var Rainy = 35;
var Thunderstorm = 45;

var today = weekday[d.getDay()];
var tomorrow = weekday[d.getDay()+1];

// Sunny, Cloudy, Rainy, Thunderstorm

function getConditions(param) {
  if (param < 15){return "Sunny"} else {
    if (param < 25){return "Cloudy"} else {
      if (param < 35){return "Rainy"} else {
        {return "Thunderstorm"}
      }
    }
  }
};

class Forecast extends Component {
  state = {    
    changeVolume0: null,
    majorVolume0: null,
    changeVolume1: null,
    majorVolume1: null,
    changeVolume2: null,
    majorVolume2: null,
    changeVolume3: null,
    majorVolume3: null,
    changeVolume4: null,
    majorVolume4: null,
    changeVolume5: null,
    majorVolume5: null,
    changeVolume6: null,
    majorVolume06: null
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

    axios.get("/api/change-days-count?major=true&offset=1&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume1: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=false&offset=2&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume2: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=true&offset=2&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume2: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=false&offset=3&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume3: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=true&offset=3&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume3: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=false&offset=4&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume4: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=true&offset=4&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume4: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=false&offset=5&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume5: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=true&offset=5&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume5: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=false&offset=6&days=0")
    .then ( request => {
      this.setState (
        {
          changeVolume6: request.data
        }
      )
    }
    );

    axios.get("/api/change-days-count?major=true&offset=6&days=0")
    .then ( request => {
      this.setState (
        {
          majorVolume6: request.data
        }
      )
    }
    );
};  
  
  render () {

    var conditions0 = getConditions(this.state.majorVolume0);
    var conditions1 = getConditions(this.state.majorVolume1);
    var conditions2 = getConditions(this.state.majorVolume2);
    var conditions3 = getConditions(this.state.majorVolume3);
    var conditions4 = getConditions(this.state.majorVolume4);
    var conditions5 = getConditions(this.state.majorVolume5);
    var conditions6 = getConditions(this.state.majorVolume6);

    return (
      <div className="App">
        <Container fluid>

          <WeatherWide
            day = "Today"
            chg_total={this.state.changeVolume0}
            major_total={this.state.majorVolume0}
            conditions={conditions0}
          />    

          <Row>
          <Col lg="4" md="6">
            <WeatherCard
              day = {weekday[d.getDay()+1]}
              chg_total={this.state.changeVolume1}
              major_total={this.state.majorVolume1}
              conditions={conditions1}
            />
          </Col>
          <Col lg="4" md="6">
            <WeatherCard
              day = {weekday[d.getDay()+2]}
              chg_total={this.state.changeVolume2}
              major_total={this.state.majorVolume2}
              conditions={conditions2}
            />
          </Col>

          <Col lg="4" md="6">
            <WeatherCard
              day = {weekday[d.getDay()+3]}
              chg_total={this.state.changeVolume3}
              major_total={this.state.majorVolume3}
              conditions={conditions3}
            />            
          </Col>
          <Col lg="4" md="6">
            <WeatherCard
              day = {weekday[d.getDay()+4]}
              chg_total={this.state.changeVolume4}
              major_total={this.state.majorVolume4}
              conditions={conditions4}          
            />
          </Col>
          <Col lg="4" md="6">
            <WeatherCard
              day = {weekday[d.getDay()+5]}
              chg_total={this.state.changeVolume5}
              major_total={this.state.majorVolume5}
              conditions={conditions5}
            />
          </Col>
          <Col lg="4" md="6">
            <WeatherCard
              day = {weekday[d.getDay()+6]}
              chg_total={this.state.changeVolume6}
              major_total={this.state.majorVolume6}
              conditions={conditions6}
          />
          </Col>
        </Row>
            
        </Container>
      </div>
    );
  };
};

export default Forecast;
