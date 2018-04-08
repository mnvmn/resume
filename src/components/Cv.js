import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import InfoTable from './InfoTable.js';
import Controls from './Controls.js';
import Footer from './Footer.js';
import MaterialIcon, {colorPallet} from 'material-icons-react';

class Cv extends React.Component {
  render() {
    return (<div className="cv-container">

      <h1>CV</h1>

<Controls/>

      <Button outline="outline" size="sm">
        <MaterialIcon icon="dashboard" size="small"/>
        <span>asc/desc</span>
      </Button>

      <InfoTable data=""/>
      <InfoTable data="" title="EDUCATION"/>
      <InfoTable data="" title="WORK EXPERIENCE"/>

      <Footer/>

    </div>)
  }
}

export default Cv;
