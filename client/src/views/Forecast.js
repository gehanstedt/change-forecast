import React from "react";
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

function Forecast() {
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Upcoming Major Changes</Card.Title>
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
                      <th className="border-0">comments</th>
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
                    <tr>
                      <td>2</td>
                      <td>CHG0001</td>
                      <td>Pending</td>
                      <td>Comments</td>
                      <td>Corporate</td>
                      <td>true</td>
                      <td>Change description</td>
                      <td>2021-02-21</td>
                      <td>2021-02-21</td>
                      <td>Application</td>
                      <td>Location1</td>
                      <td>America/New_York</td>
                      <td>My justification1</td>
                      <td>@Assign Group</td>
                      <td>MAJOR</td>   
                    </tr>       
                    <tr>
                      <td>2</td>
                      <td>CHG0001</td>
                      <td>Pending</td>
                      <td>Comments</td>
                      <td>Corporate</td>
                      <td>true</td>
                      <td>Change description</td>
                      <td>2021-02-21</td>
                      <td>2021-02-21</td>
                      <td>Application</td>
                      <td>Location1</td>
                      <td>America/New_York</td>
                      <td>My justification1</td>
                      <td>@Assign Group</td>
                      <td>MAJOR</td>   
                    </tr> 
                    <tr>
                      <td>2</td>
                      <td>CHG0001</td>
                      <td>Pending</td>
                      <td>Comments</td>
                      <td>Corporate</td>
                      <td>true</td>
                      <td>Change description</td>
                      <td>2021-02-21</td>
                      <td>2021-02-21</td>
                      <td>Application</td>
                      <td>Location1</td>
                      <td>America/New_York</td>
                      <td>My justification1</td>
                      <td>@Assign Group</td>
                      <td>MAJOR</td>   
                    </tr> 
                    <tr>
                      <td>2</td>
                      <td>CHG0001</td>
                      <td>Pending</td>
                      <td>Comments</td>
                      <td>Corporate</td>
                      <td>true</td>
                      <td>Change description</td>
                      <td>2021-02-21</td>
                      <td>2021-02-21</td>
                      <td>Application</td>
                      <td>Location1</td>
                      <td>America/New_York</td>
                      <td>My justification1</td>
                      <td>@Assign Group</td>
                      <td>MAJOR</td>   
                    </tr>                                                                         
                    <tr>
                      <td>2</td>
                      <td>CHG0001</td>
                      <td>Pending</td>
                      <td>Comments</td>
                      <td>Corporate</td>
                      <td>true</td>
                      <td>Change description</td>
                      <td>2021-02-21</td>
                      <td>2021-02-21</td>
                      <td>Application</td>
                      <td>Location1</td>
                      <td>America/New_York</td>
                      <td>My justification1</td>
                      <td>@Assign Group</td>
                      <td>MAJOR</td>   
                    </tr>                     
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

export default Forecast;
