import React from 'react';
import Logo from './../components/Logo.js';
import ControlFlipPage from './../components/ControlFlipPage.js';
import {Link} from 'react-router-dom'

class PagePoster extends React.Component {
  render() {
    return (<div id="pageLogo">

      <Logo/>

      <Link to="/">
        <ControlFlipPage orientation="left"/>
      </Link>

    </div>)
  }
}

export default PagePoster
