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

const Forecast = () => {
  return (
    <div className="App">
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      {/* chg_total, major_total */}
      <Container>
        <WeatherWide
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />    

           
    <CardDeck style={{display: 'flex', flexDirection: 'row',justifyContent: 'right', padding:"20px"}}>
        <WeatherCard
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />
        <WeatherCard
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />
        <WeatherCard
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />
</CardDeck>

<CardDeck style={{display: 'flex', flexDirection: 'row',justifyContent: 'right', padding:"20px"}}>
        <WeatherCard
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />
        <WeatherCard
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />
        <WeatherCard
          dt={1602104400 * 1000}
          chg_total="22.67"
          major_total="24.39"
          main="Clear"
          icon="assets/img/hazy.png"
        />

</CardDeck>
    
      
      </Container>
    </div>
  );
};

export default Forecast;
