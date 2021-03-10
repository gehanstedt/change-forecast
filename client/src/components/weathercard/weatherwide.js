import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';

const WeatherWide = ({day, chg_total, major_total}) => {
    const conditions = "Sunny";
    const weatherimage = require(`assets/img/weather-icons/${conditions}.png`).default;
    const weatherbackground = require(`assets/img/${conditions}Background.jpg`).default;

  return (    
    
      <Row>
        <Col md="12">
          <Card className="card-user">              
            <div className="card-image">
              <img
                alt="..."
                src={weatherbackground}
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