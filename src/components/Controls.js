import React from 'react';
import {Col, Row, ButtonGroup, Button} from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'

class Controls extends React.Component {

  render() {
    return (<Row>

      <Col className="d-flex justify-content-end">
        <ButtonGroup>
          <Button outline={true} size="xs" className="d-flex align-items-center" href="https://github.com/mnvmn/resume">
            <FontAwesome.FaCodeFork/>
            &nbsp; View Source
          </Button>
          <Button outline={true} size="xs" className="d-flex align-items-center" href="/CV_MN.pdf">
            <FontAwesome.FaDownload/>
            &nbsp; Download PDF
          </Button>
          <Button outline={true} size="xs" className="d-flex align-items-center" onClick={this.props.btnHandler}>
            {
              this.props.isAscending
                ? <FontAwesome.FaSortAmountDesc/>
                : <FontAwesome.FaSortAmountAsc/>
            }
            &nbsp; {
              this.props.isAscending
                ? 'Latest First'
                : 'Oldest First'
            }
          </Button>
        </ButtonGroup>
      </Col>
    </Row>)
  }
}

export default Controls;
