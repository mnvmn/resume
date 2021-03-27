import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Navbar, NavbarToggler, Collapse,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Logo from './Logo';
import dispatcher from '../../store/dispatchers';
import reducer from '../../store/reducers';
import Cv from './Cv';
import Controls from './Controls';
import ControlFlipPage from '../../components/ControlFlipPage';
import PrintHeader from '../../components/PrintHeader';

const PageCv = ({ navbarOpen, toggleNavbar }) => (
  <div id="pageCv" className="page">
    <PrintHeader />

    <Navbar color="faded" light className="p-0 d-sm-none justify-content-end d-print-none">
      <Collapse isOpen={navbarOpen} navbar>
        <Controls isVertical />
      </Collapse>
      <NavbarToggler onClick={toggleNavbar} className="mt-2 mr-2" />
    </Navbar>

    <Container className="d-none d-sm-block d-print-none mt-2 mb-3">
      <Row className="d-flex align-items-center">
        <Col>
          <Logo width={100} height={100} color="#0475dc" />
        </Col>
        <Col>
          <Controls isVertical={false} />
        </Col>
      </Row>
    </Container>

    <Container className="d-print-only d-block d-sm-none mt-2 mt-md-5 mb-3 mb-md-5">
      <h3 className="text-center text-dark mt-md-2">CV</h3>
    </Container>

    <Cv />

    <Link to="/contact">
      <ControlFlipPage orientation="right" className="d-none d-sm-block" />
    </Link>
  </div>
);

PageCv.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default connect(reducer, dispatcher)(PageCv);
