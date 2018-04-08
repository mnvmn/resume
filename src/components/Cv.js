import React from 'react';
import InfoTable from './InfoTable.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';

class Cv extends React.Component {
  render() {
    return (<div className="cv-container">

      <Container>

        <h3 className="text-center font-weight-bold">CV</h3>

        <Controls/>
        <InfoTable data=""/>
        <InfoTable data="" title="EDUCATION"/>
        <InfoTable data="" title="WORK EXPERIENCE"/>
      </Container>

    </div>)
  }
}

export default Cv;
