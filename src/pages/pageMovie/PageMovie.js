import React from 'react';
import { Link } from 'react-router-dom';
import ControlFlipPage from './../../components/ControlFlipPage';
import Animation from './Animation';

class PageMovie extends React.Component {
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

export default PageMovie;
