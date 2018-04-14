import React, {Component} from 'react';
import {connect} from 'react-redux';
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

import dispatcher from './store/dispatchers.js';
import reducer from './store/reducers.js';

const URL_DATA = '/data.json';

class App extends Component {

  componentDidMount() {
    fetch(URL_DATA).then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('fetch data failed');
      }
    }).then(data => this.props.dataReceived(data)).catch(error => this.setState({error}));
  }

  render() {
    return (<div className="App  d-flex flex-column">

      <Container>
        <Row>
          <Col>

            <Navbar color="faded" light={true} className="d-sm-none justify-content-end">
              <Collapse isOpen={this.props.navbarOpen} navbar>
                <Controls isVertical={true}/>
              </Collapse>
              <NavbarToggler onClick={this.props.toggleNavbar} className="mr-2"/>
            </Navbar>

            <div className="d-none d-sm-block">
              <Controls isVertical={false}/>
            </div>

          </Col>
        </Row>
      </Container>

      <Cv/>
      <Footer/>

    </div>);
  }
}

export default connect(reducer, dispatcher)(App)
