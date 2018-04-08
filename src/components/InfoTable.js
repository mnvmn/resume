import React from 'react';
import {Col, Row} from 'reactstrap';

class InfoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (<div className="mb-4">
      {
        this.props.title && <Row>
            <Col><h5 className="ml-1 font-weight-bold">{this.props.title}</h5>
            </Col>
          </Row>
      }
      <Row>
        <Col>Name</Col>
        <Col>Ing. arch. Matúš Nevedel</Col>
      </Row>
      <Row>
        <Col>Date of birth</Col>
        <Col>2.12.1984</Col>
      </Row>
    </div>)
  }
}

export default InfoTable;
