import React from 'react';
import {connect} from 'react-redux';
import dispatcher from './../store/dispatchers.js';
import reducer from './../store/reducers.js';
import Logo from './../components/Logo.js';
import {Link} from 'react-router-dom'
import {Container} from 'reactstrap';
import TableInfo from './../components/TableInfo.js';
import ControlFlipPage from './../components/ControlFlipPage.js';

class PagePoster extends React.Component {
  render() {
    const data = this.props.data;

    return (<div id="pageLogo">

      <Logo/>

      <Link to="/">
        <ControlFlipPage orientation="left"/>
      </Link>

      <Container style={{marginTop: '60px'}}>
        <h3 className="text-center text-dark mt-2 mb-4">CONTACT</h3>
        <TableInfo data={data.contact}/>
      </Container>

    </div>)
  }
}

export default connect(reducer, dispatcher)(PagePoster)
