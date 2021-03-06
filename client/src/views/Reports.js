import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow"
import ChartistGraph from "react-chartist";
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

class Forecast extends Component {
    handleClick = () => {
        // new GetReports().functionWithArg('About React');
        new GetReports();
      };

  render() {
    return (
        <Container fluid>
          <div>
           <Button
              className="btn-round btn-fill"
              href="/admin/MajorDay"
              // target="_blank"
              variant="info"
              >
              Major changes for today
            </Button>
            </div>
            <br></br>
            <div>
            <Button
              className="btn-round btn-fill"
              href="/admin/MajorWeek"
              // target="_blank"
              variant="info"
              >
              Major changes for upcoming week
            </Button>
            </div>
            <br></br>
            <div>                        
            <Button
              className="btn-round btn-fill"
              href="/admin/MajorMonth"
              // target="_blank"
              variant="info"
              >
              Major changes for next 30 days
            </Button>
            </div>
            <br></br>
            <div> 
            <Button
              className="btn-round btn-fill"
              href="/admin/AllDayReport"
              // target="_blank"
              variant="info"
              >
              All changes for today 
            </Button>
            </div>
            <br></br>
            <div>
            <Button
              className="btn-round btn-fill"
              href="/admin/AllWeekReport"
              // target="_blank"
              variant="info"
              >
              All changes for the week 
            </Button>
            </div>
            <br></br>            
            <div>
            <Button
              className="btn-round btn-fill"
              href="/admin/AllMonthReport"
              // target="_blank"
              variant="info"
              >
              All changes for the month
            </Button>
            </div>
            <br></br>
            </Container>
    )
}

}

export default Forecast;
