import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import InfoTable from './InfoTable.js';

class Cv extends React.Component {
  render() {
    return (<div className="container">
      <h1>CV</h1>
      <div className="row"/>

      <Button outline="outline" size="sm">
        <span>asc/desc</span>
      </Button>

      <Container>
        <InfoTable/>

        <InfoTable title="EDUCATION"/>

        <InfoTable title="WORK EXPERIENCE"/>

      </Container>

    </div>)
  }
}

export default Cv;
