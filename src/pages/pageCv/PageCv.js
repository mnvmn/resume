import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import dispatcher from './../../store/dispatchers';
import reducer from './../../store/reducers';
import Cv from './Cv';
import Controls from './Controls';
import ControlFlipPage from './../../components/ControlFlipPage';
import CvPrintHeader from './CvPrintHeader';
// import Logo from './Logo';

class PageCv extends React.Component {
  render() {
    return (
      <div id="pageCv" className="page">
        <CvPrintHeader />

        <Navbar color="faded" light className="p-0 d-sm-none justify-content-end d-print-none">
          <Collapse isOpen={this.props.navbarOpen} navbar>
            <Controls isVertical />
          </Collapse>
          <NavbarToggler onClick={this.props.toggleNavbar} className="mt-2 mr-2" />
        </Navbar>

        {/* <div className="container-alt px-2 px-md-4 px-lg-3 px-xl-0"
        style={{ maxWidth: '1000px' }}>
          <Logo />
        </div> */}

        <div className="cv-header d-print-none">
          <Container className="d-none d-sm-block mt-3">
            <Row>
              <Col>
                <Controls isVertical={false} />
              </Col>
            </Row>
          </Container>
        </div>

        <Link to="/contact">
          <ControlFlipPage orientation="right" className="d-none d-sm-block" />
        </Link>

        <Cv />
      </div>
    );
  }
}

PageCv.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default connect(reducer, dispatcher)(PageCv);
