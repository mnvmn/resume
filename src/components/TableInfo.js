import React from 'react';
import {Col, Row} from 'reactstrap';
import TableProjects from './TableProjects.js';

class TableInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (<div className="mb-4">
      {
        this.props.title && <Row>
            <Col>
              <h5 className="ml-1 font-weight-bold">{this.props.title}</h5>
            </Col>
          </Row>
      }
      {
        this.props.data && this.props.data.map(info => <div key={info.label}>
          <Row>
            <Col xs="6">{info.label}</Col>
            <Col xs="6">{info.value}</Col>
          </Row>
          {info.projects && <TableProjects projects={info.projects}/>}
        </div>)
      }
    </div>)
  }
}

export default TableInfo;
