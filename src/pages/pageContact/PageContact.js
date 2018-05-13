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

        <div className="d-flex justify-content-center" style={{ marginTop: '200px' }}>
          <div id="logo">
            <div className="title text-center">Let&apos;s build something in React...</div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Logo3d color="#848484" />
        </div>
      </div>
    );
  }
}

export default connect(reducer, dispatcher)(PagePoster);
