import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import dispatcher from './../../store/dispatchers';
import reducer from './../../store/reducers';
import ControlFlipPage from './../../components/ControlFlipPage';
import Str from './../../components/Str';
import msgs from './../../translations.json';

class PagePoster extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div id="pageLogo" className="page">
        <Link to="/">
          <ControlFlipPage orientation="left" />
        </Link>

        <div className="d-flex justify-content-center" style={{ marginTop: '200px' }}>
          <div id="logo">
            <div className="title text-center">Let&apos;s build something in React...</div>
          </div>
        </div>

        <Container style={{ marginTop: '60px' }}>
          <h3 className="text-center text-dark mt-2 mb-4 text-uppercase">
            <Str msg={msgs.title.contact} />
          </h3>
          {data.contact.map(info => (
            <Row key={Math.random()} className="justify-content-center">
              <Col xs="5" md="3" className="text-dark">
                <Str msg={info.label} />
              </Col>
              <Col xs="7" md="5" lg="4" className="text-dark">
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
