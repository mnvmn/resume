import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';


class Cv extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, CV</h1>

        <div className="row"/>
        <Button outline>abcd</Button>


        <Container>
          <Row>
            <Col className="text-left">Name</Col>
            <Col className="text-left">Ing. arch. Matúš Nevedel</Col>
          </Row>
          <Row>
            <Col className="text-left">Date of birth</Col>
            <Col className="text-left">2.12.1984</Col>
         </Row>
       </Container>
      </div>
    )
  }
}

export default Cv;
