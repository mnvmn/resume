import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';

class InfoTable extends React.Component {
  render() {

    const title = this.props.title

    return (<Container>
      {
        this.props.title && <Row>
            <Col className=" text-left">Name<h5 className="ml-1 font-weight-bold text-left">{this.props.title}</h5>
            </Col>
          </Row>
      }
      <Row>
        <Col className=" text-left">Name</Col>
        <Col className="text-left">Ing. arch. Matúš Nevedel</Col>
      </Row>
      <Row>
        <Col className="text-left">Date of birth</Col>
        <Col className="text-left">2.12.1984</Col>
      </Row>
    </Container>)
  }
}

export default InfoTable;
