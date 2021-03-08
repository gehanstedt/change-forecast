import React from 'react';
import {Card, Button} from 'react-bootstrap';

const WeatherCard = ({dt, chg_total, major_total, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (    
        <Card>
            <Card.Header>Day of the Week</Card.Header>
            <hr></hr>
            <Card.Img src={                             
                require("assets/img/hazy.png")
                .default}
                />
            <Card.Body>
            <Card.Title>{main}</Card.Title>
            <Card.Footer>
                {date.toLocaleDateString()} - {date.toLocaleTimeString()}                    
                Total Changes: {chg_total}
                Major Changes: {major_total}
            </Card.Footer>
        </Card.Body>                
      </Card>
      
  );
};

export default WeatherCard;