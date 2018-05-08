import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DeployedDate from './../components/DeployedDate';

const cvLink = 'https://mnvmn.github.io';

export default class CvPrintHeader extends React.Component {
  render() {
    return (
      <Container className="d-print-block">
        <Row>
          <Col className="d-flex justify-content-between text-muted">
            <a href={cvLink} className="btn-link">
              {cvLink}
            </a>
            <div className="text-small">
              <DeployedDate />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
