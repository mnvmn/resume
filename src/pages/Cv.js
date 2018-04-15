import React from 'react';
import Cv from './../components/Cv.js';
import Controls from './../components/Controls.js';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  Collapse
} from 'reactstrap';

class PageCv extends React.Component {
  render() {
    return (<div id="pageCv">
      <div>
        <Navbar color="faded" light={true} className="p-0 d-sm-none justify-content-end">
          <Collapse isOpen={this.props.navbarOpen} navbar={true}>
            <Controls isVertical={true}/>
          </Collapse>
          <NavbarToggler onClick={this.props.toggleNavbar} className="mt-2 mr-2"/>
        </Navbar>
      </div>
      <Container className="d-none d-sm-block mt-3">
        <Row>
          <Col>
            <Controls isVertical={false}/>
          </Col>
        </Row>
      </Container>

      <Cv/>

    </div>)
  }
}

export default PageCv
