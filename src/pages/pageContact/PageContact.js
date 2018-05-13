import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo3d from 'react-3d-logo';
import dispatcher from './../../store/dispatchers';
import reducer from './../../store/reducers';
import ControlFlipPage from './../../components/ControlFlipPage';

class PagePoster extends React.Component {
  render() {
    return (
      <div id="pageLogo" className="page">
        <Link to="/">
          <ControlFlipPage orientation="left" />
        </Link>

        <div
          className="d-flex justify-content-center"
          style={{ marginTop: '200px', padding: '5px 10px' }}
        >
          {/* #0475dc */}
          {/* '#0a67c3' */}
          <div id="logo-title" className="title text-center mb-3" style={{ color: '#0475dc' }}>
            Let&apos;s build something in React...
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Logo3d color="#0361b7" />
        </div>
      </div>
    );
  }
}

export default connect(reducer, dispatcher)(PagePoster);
