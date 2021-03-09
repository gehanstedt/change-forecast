import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';

const WeatherWide = ({day, chg_total, major_total, conditions}) => {
// create a date object with Date class constructor
const weatherimage = require("assets/img/weather-icons/sunny.png").default;
//low chg Sunny, med chg Cloudy, high chg Rain, major chg Thunderstorm

const weatherimages = [   
    {   
    "sunny" : require("assets/img/weather-icons/sunny.png").default,
    "cloudy" : require("assets/img/weather-icons/cloudy.png").default,
    "rainy" : require("assets/img/weather-icons/rainy.png").default,
    "thunderstorm" : require("assets/img/weather-icons/t-storm-rain.png").default
    }
  ];

  return (    
    
      <Row>
        <Col md="12">
          <Card className="card-user">              
            <div className="card-image">
              <img
                alt="..."
                src={
                  require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                    .default
                }
              ></img>
            </div>
            <Card.Body>
              <div className="author">
                <a href="/admin/Reports">                
                  <img
                    alt="..."
                    className="avatar"                    
                    src={weatherimage}
                  ></img>
                  <h2 className="title">{day}'s Forecast: {conditions}</h2>
                </a>                
              </div>              
              <p className="description text-center">
                Major Changes: {major_total}<br></br>
                Total Changes: {chg_total} <br></br>                       
              </p>
            </Card.Body>

          </Card>
        </Col>
      </Row>
  );
};

export default WeatherWide;