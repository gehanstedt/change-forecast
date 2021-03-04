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
} from "react-bootstrap";
// App.js

import WeatherCard from '../components/weathercard/Weathercard';


const Forecast = () => {
  return (
    <div className="App">
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      <WeatherCard
        dt={1602104400 * 1000}
        temp_min="22.67"
        temp_max="24.39"
        main="Clear"
        icon="01d"
      />
    </div>
  );
};

export default Forecast;
