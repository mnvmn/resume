import React from 'react';
import {Col, Row, ButtonGroup, Button} from 'reactstrap';
import MaterialIcon, {colorPallet} from 'material-icons-react';

class Controls extends React.Component {
  render() {
    return (<Row>
      <Col className="d-flex justify-content-end">
        <ButtonGroup>
          <Button outline={true} size="sm" className="d-flex align-items-center">
            <MaterialIcon icon="import_export" size={15} className="p-0 m-0" color="none"/>
            <span>asc/desc</span>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>)
  }
}

export default Controls;
