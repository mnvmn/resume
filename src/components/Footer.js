import React from 'react';
import {Container, Col, Row} from 'reactstrap';

class Footer extends React.Component {

  // const REST_URL = 'https://api.github.com/repos/mnvn/mnvmn.github.io/commits/master';

  render() {
    const version = React.version
    return (<footer id="footer" className="mt-auto">
      <div className="d-flex align-items-center">
        <div id="bootstrap-grid-util" className="position-absolute">
          <span className="d-sm-none">XS</span>
          <span className="d-none d-sm-block d-md-none">SM</span>
          <span className="d-none d-md-block d-lg-none">MD</span>
          <span className="d-none d-lg-block d-xl-none">LG</span>
          <span className="d-none d-xl-block">XL</span>
        </div>

        <Container>
          <Row>
            <Col className="text-sm text-right text-secondary">
              <small>
                <span className="text-muted">#</span>
                {' '}
                <b>React v{version}</b>
              </small>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>)
  }
}

export default Footer;
