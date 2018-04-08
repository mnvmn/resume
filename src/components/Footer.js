import React from 'react';
import {Container, Col, Row} from 'reactstrap';

class Footer extends React.Component {
  render() {
    const version = React.version
    return (<footer className="footer">
      <Container>
        <Row>
          <Col className="text-sm text-right text-secondary">
            <small>
              <span className="text-muted">powered by</span>
              {' '}
              <b>React v{version}</b>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>)
  }
}

export default Footer;
