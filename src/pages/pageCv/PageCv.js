import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactLogo from 'react-3d-logo';
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

        <div className="d-none d-sm-block d-print-none">
          {/* <div className="pl-4">
            <Container>
              <ReactLogo width={100} height={100} />
            </Container>
          </div> */}

          <Container className="mt-3">
            <Row className="d-flex align-items-center">
              <Col>
                <ReactLogo width={100} height={100} />
              </Col>
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
