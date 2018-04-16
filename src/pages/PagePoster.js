import React from 'react';
import Logo from './../components/Logo.js';
import ControlFlipPage from './../components/ControlFlipPage.js';


class PagePoster extends React.Component {
  render() {
    return (<div id="pageLogo">

      <Logo/>

      <ControlFlipPage orientation="left" href="/"/>

    </div>)
  }
}

export default PagePoster
