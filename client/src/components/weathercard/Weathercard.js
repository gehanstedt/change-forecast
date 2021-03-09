import React from 'react';
import {
    Card
  } from 'react-bootstrap';

const WeatherCard = ({day, chg_total, major_total, conditions}) => {
  // create a date object with Date class constructor
  const weatherimage = require(`assets/img/weather-icons/${conditions}.png`).default;
  return (         
        <Card className="card-stats">
            <Card.Header>{day}'s Forecast</Card.Header>
            <hr></hr>            
            <img src={weatherimage} alt="" width="150" class="rounded-circle mb-3"/>            
            <Card.Body>
            <Card.Title>{conditions}</Card.Title>
            <hr></hr>
            <Card.Footer>                                 
                Total Changes: {chg_total}<br></br>
                Major Changes: {major_total}
            </Card.Footer>
        </Card.Body>                
      </Card>
    
  );
};

export default WeatherCard;