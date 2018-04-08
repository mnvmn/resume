import React from 'react';
import {Container, Col, Row} from 'reactstrap';

class Footer extends React.Component {
  render() {
    const version = React.version
    return (<footer className="footer">
      <Container>
        <Row>
          <Col className="text-sm text-secondary">
            <div id="bootstrap-grid-util">
              <span className="d-sm-none">XS</span>
              <span className="d-none d-sm-block d-md-none">SM</span>
              <span className="d-none d-md-block d-lg-none">MD</span>
              <span className="d-none d-lg-block d-xl-none">LG</span>
              <span className="d-none d-xl-block">XL</span>
            </div>
          </Col>

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
