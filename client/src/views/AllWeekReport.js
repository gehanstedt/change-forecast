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

class allWeekReport extends Component {
  state = {
    changes: [
      {
        "_id": "603a71f458d0185558f8d172",
        "number_affected": 2,
        "number": "CHG0001",
        "reviewed": "Pending",
        "company": "Corporate",
        "production_system": "true",
        "short_description": "Change description",
        "start_date": "2021-02-21T03:46:34.578Z",
        "end_date": "2021-02-21T03:46:34.578Z",
        "class": "Application",
        "location": "Location1",
        "time_zone": "America/New_York",
        "justification": "My justification1",
        "assignment_group": "@Assign Group",
        "sys_tag": "MAJOR"
      }
    ]
  }

  componentDidMount () {
  var  isMajor = "";
  var numDays = 6
    console.log ('In componentDidMount ()');
//  Example on how to use the change-variable API request with major and days options
  //  var request = axios.get("/api/change-variable?major=true&days=5")
  console.log(isMajor)
   var request = axios.get("/api/change-variable?major=" + isMajor + "&days=" + numDays)
//
//  How to use the change API request all changes (no filters)
//    var request = axios.get("/api/change")
//
//  How to use the change-major API request only major changes
//    var request = axios.get("/api/change-major")
//
    // var request = axios.get("/api/change-major")
    .then ( request => {
      this.setState (
        {
          changes: request.data
        },
        () => {
          console.log ('Here');
          console.log (this.state.changes[0].number);
        }
      )
    }
    );
  }

  render () {
    return (
      <>
        <Container fluid>
          <Row>
          <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">All Changes for this week</Card.Title>
                  <p className="card-category">
                    The best changes happen here
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">affected</th>
                        <th className="border-0">number</th>
                        <th className="border-0">reviewed</th>
                        <th className="border-0">company</th>
                        <th className="border-0">production</th>
                        <th className="border-0">description</th>
                        <th className="border-0">start</th>
                        <th className="border-0">end</th>
                        <th className="border-0">class</th>
                        <th className="border-0">location</th>
                        <th className="border-0">time_zone</th>
                        <th className="border-0">justification</th>
                        <th className="border-0">assignment_group</th>
                        <th className="border-0">sys_tag</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.changes.map(change => (
                      <TableRow
                        change={change}
                      />))
                    }
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </>
    );
  }
}

export default allWeekReport;
