import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  Collapse
} from 'reactstrap';
import Controls from './components/Controls.js';
import Cv from './components/Cv.js';
import Footer from './components/Footer.js';
import './css/main.css';

class App extends Component {

  render() {
    return (<div className="App  d-flex flex-column">

      {/* <Container>
        <Row>
          <Col>
            <Navbar color="faded" light="light">
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
              <Collapse isOpen={false} navbar="navbar">
                <Controls changeOrder={this.changeOrder} changeLang={this.changeLang}/>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container> */
      }

      <Controls isVertical={false}/>

      <Cv/>
      <Footer/>

    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cv)
