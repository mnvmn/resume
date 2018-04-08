import React from 'react';
import {Container, Col, Row, ButtonGroup, Button} from 'reactstrap';
import MaterialIcon, {colorPallet} from 'material-icons-react';

class Controls extends React.Component {
  render() {
    return (<Row>
      <Col className="d-flex justify-content-end">
        <ButtonGroup>
          <Button outline={true} size="sm">
            <MaterialIcon icon="dashboard" size="small"/>
            <span>asc/desc</span>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>)
  }
}

export default Controls;
