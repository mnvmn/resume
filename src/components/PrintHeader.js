import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DeployedDate from './DeployedDate';
import ContactInfo from './ContactInfo';

const cvLink = 'https://mnvmn.github.io';

const PrintHeader = () => {
  return (
    <Container className="d-print-only">
      <Row>
        <Col className="d-flex justify-content-between text-muted text-small">
          <ContactInfo />

          <div>
            <a href={cvLink}>{cvLink}</a>
            <div className="text-right">
              <DeployedDate />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PrintHeader;