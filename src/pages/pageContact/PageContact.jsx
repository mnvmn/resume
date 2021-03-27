import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo3d from 'react-3d-logo';
import dispatcher from '../../store/dispatchers';
import reducer from '../../store/reducers';
import ControlFlipPage from '../../components/ControlFlipPage';

class PagePoster extends React.Component {
  render() {
    return (
      <div
        id="pageLogo"
        className="page anim-enter d-flex align-items-center justify-content-center h-100"
        style={{ minHeight: '700px' }}
      >
        <Link to="/">
          <ControlFlipPage orientation="left" />
        </Link>

        <div className="py-2 px-2 pt-lg-5 pb-lg-5">
          <Logo3d />
          <Logo3d isSpinning />
          <Logo3d isSpinning isRotating />
        </div>

        {/* #0475dc */}
        {/* '#0a67c3' */}
        {/* <div id="logo-title" className="title text-center mb-3" style={{ color: '#0475dc' }}>
          React.js and THREE.js
        </div> */}
      </div>
    );
  }
}

export default connect(reducer, dispatcher)(PagePoster);
