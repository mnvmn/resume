import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';
import Animation from './../components/Animation';
import ControlFlipPage from './../components/ControlFlipPage';

class PagePoster extends React.Component {
  render() {
    return (
      <div id="pageAnimation" className="page">
        <Link to="/contact">
          <ControlFlipPage orientation="left" />
        </Link>

        <div className="d-flex justify-content-center" style={{ marginTop: '200px' }}>
          <Animation />
        </div>
      </div>
    );
  }
}

export default connect(reducer, dispatcher)(PagePoster);
