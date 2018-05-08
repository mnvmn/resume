import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';
import Cv from './../components/Cv';
import Controls from './../components/Controls';
import ControlFlipPage from './../components/ControlFlipPage';
import CvPrintHeader from './../components/CvPrintHeader';

class PageCv extends React.Component {
  render() {
    return (
      <div id="pageCv" className="page">
        <CvPrintHeader />

        <ParallaxProvider>

          <Navbar color="faded" light className="p-0 d-sm-none justify-content-end">
            <Collapse isOpen={this.props.navbarOpen} navbar>
              <Controls isVertical />
            </Collapse>
            <NavbarToggler onClick={this.props.toggleNavbar} className="mt-2 mr-2" />
          </Navbar>

          <Container className="d-none d-sm-block mt-3">
            <Row>
              <Col>
                <Controls isVertical={false} />
              </Col>
            </Row>
          </Container>

          <Link to="/contact">
            <ControlFlipPage orientation="right" className="d-none d-sm-block" />
          </Link>

          <Cv />
        </ParallaxProvider>
      </div>
    );
  }
}

PageCv.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default connect(reducer, dispatcher)(PageCv);
