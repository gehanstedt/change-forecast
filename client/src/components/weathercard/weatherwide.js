import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';

const WeatherWide = ({dt, chg_total, major_total, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
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
                    className="avatar border-gray"
                    src={require("assets/img/hazy.png").default}
                  ></img>
                  <h5 className="title">Todays Forecast</h5>
                </a>                
              </div>
              <p className="description text-center">
                Major Changes: {major_total}<br></br>
                Total Changes: {chg_total} <br></br>
                {date.toLocaleDateString()} - {date.toLocaleTimeString()}
              </p>
            </Card.Body>

          </Card>
        </Col>
      </Row>





    //     <Card>
    //         <Card.Img variant="top" src={             
    //             //require('assets/img/',icon)
    //             require("assets/img/hazy.png")
    //             .default}
    //             />
    //         <Card.Body>
    //         <Card.Title>{main}</Card.Title>

    //         {/*  datetime is received in milliseconds, let's turn into local date time */}
    //         <p>
    //         {date.toLocaleDateString()} - {date.toLocaleTimeString()}
    //         </p>
    //         {/* minimum temperature */}
    //         <p>Total Changes: {chg_total}</p>
    //         {/* maximum temperature */}
    //         <p>Major Changes: {major_total}</p>
    //     </Card.Body>
    //   </Card>


  );
};

export default WeatherWide;