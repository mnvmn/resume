import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';
import Logo from './../components/Logo';
import ControlFlipPage from './../components/ControlFlipPage';
import Str from './../components/Str';

class PagePoster extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div id="pageLogo" className="page">
        <Logo />

        <Link to="/">
          <ControlFlipPage orientation="left" />
        </Link>

        <Container style={{ marginTop: '60px' }}>
          <h3 className="text-center text-dark mt-2 mb-4">CONTACT</h3>
          {data.contact.map(info => (
            <Row key={Math.random()}>
              <Col xs="5" lg="4" className="text-dark">
                <Str msg={info.label} />
              </Col>
              <Col xs="7" lg="8" className="text-dark">
                <Str msg={info.value} />
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

PagePoster.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.array,
  }).isRequired,
};

export default connect(reducer, dispatcher)(PagePoster);
