import React from 'react';
import {Col, Row, ButtonGroup, Button} from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'

class Controls extends React.Component {
  render() {
    return (<Row>
      <Col className="d-flex justify-content-end">
        <ButtonGroup>
          <Button outline={true} size="xs" className="d-flex align-items-center">
            {false ? <FontAwesome.FaSortNumericAsc /> : <FontAwesome.FaSortNumericDesc />}
            {' '}
            <span>asc/desc</span>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>)
  }
}

export default Controls;
