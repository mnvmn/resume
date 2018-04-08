import React from 'react';
import InfoTable from './InfoTable.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';

class Cv extends React.Component {
  render() {
    return (<div className="cv-container">

      <Container>
        <Controls/>

        <h3 className="text-center font-weight-bold mb-5">CV</h3>

        <InfoTable data=""/>
        <InfoTable data="" title="EDUCATION"/>
        <InfoTable data="" title="WORK EXPERIENCE"/>
      </Container>

    </div>)
  }
}

export default Cv;
