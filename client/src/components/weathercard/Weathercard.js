import React from 'react';
import {
    Card
  } from 'react-bootstrap';

const WeatherCard = ({day, chg_total, major_total, conditions}) => {
  // create a date object with Date class constructor
  const weatherimage = require(`assets/img/weather-icons/${conditions}.png`).default;
  return (         
        <Card className="card-stats">
            <Card.Header class="text-center"><h3>{day}</h3></Card.Header>
            <hr></hr>            
            <Card.Body class="text-center">
            <img src={weatherimage} alt="" width="150" class="rounded-circle mb-3"/>            
            
            <Card.Title><h4>{conditions}</h4></Card.Title>
            <Card.Footer>                                 
                Total Changes: {chg_total}<br></br>
                Major Changes: {major_total}
            </Card.Footer>
        </Card.Body>                
      </Card>
    
  );
};

export default WeatherCard;