import React from "react";
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
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = weekday[d.getDay()];
var tomorrow = weekday[d.getDay()+1];


const Forecast = () => {
  return (
    <div className="App">
      <Container fluid>
        <WeatherWide
          day = {weekday[d.getDay()]}
          chg_total="15"
          major_total="24"
          conditions="Rainy"
        />    
        <Row>
        <Col lg="4" md="6">
        <WeatherCard
          day = {weekday[d.getDay()+1]}
          chg_total="67"
          major_total="39"
          conditions="Sunny"
        />
        </Col>
        <Col lg="4" md="6">
        <WeatherCard
          day = {weekday[d.getDay()+2]}
          chg_total="27"
          major_total="29"
          conditions="Sunny"
        />
        </Col>

        <Col lg="4" md="6">
        <WeatherCard
          day = {weekday[d.getDay()+3]}
          chg_total="27"
          major_total="29"
          conditions="Cloudy"
        />            
        </Col>
        <Col lg="4" md="6">
        <WeatherCard
          day = {weekday[d.getDay()+4]}
          chg_total="227"
          major_total="239"
          conditions="Thunderstorm"          
        />
        </Col>
        <Col lg="4" md="6">
        <WeatherCard
          day = {weekday[d.getDay()+5]}
          chg_total="227"
          major_total="439"
          main="Clear"
          conditions="Cloudy"
        />
        </Col>
        <Col lg="4" md="6">
        <WeatherCard
          day = {weekday[d.getDay()+6]}
          chg_total="217"
          major_total="139"
          conditions="Rainy"
        />
        </Col>
      </Row>
           
      </Container>
    </div>
  );
};

export default Forecast;
