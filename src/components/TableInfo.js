import React from 'react';
import {Col, Row} from 'reactstrap';
import TableProjects from './TableProjects.js';

class TableInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      isAscending: props.isAscending
    };
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Info state', nextState.isAscending)
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
            <Col xs="6" className={this.props.title ? 'text-primary' : ''}>{info.label}</Col>
            <Col xs="6" className={info.projects ? 'font-weight-bold' : ''}>{info.value}</Col>
          </Row>
          {info.projects && <TableProjects projects={info.projects} isAscending={this.state.isAscending}/>}
        </div>)
      }
    </div>)
  }
}

export default TableInfo;
