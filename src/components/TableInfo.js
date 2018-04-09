import React from 'react';
import {Col, Row} from 'reactstrap';
import TableProjects from './TableProjects.js';

class TableInfo extends React.Component {

  render() {

    const infoList = this.props.data
      ? (
        this.props.isAscending
        ? this.props.data
        : [...this.props.data].reverse())
      : ''

    return (<div className="mb-4">
      {
        this.props.title && <Row>
            <Col>
              <h5 className="ml-1 font-weight-bold">{this.props.title}</h5>
            </Col>
          </Row>
      }
      {
        (
          this.props.title
          ? infoList
          : this.props.data).map((info, index) => <div key={info.label}>
            <Row className={info.projects && index > 0 ? 'mt-4' : ''}>
              <Col xs="6" className={this.props.title
                  ? 'text-primary'
                  : ''}>{info.label}
              </Col>
              <Col xs="6" className={info.projects
                  ? 'font-weight-bold'
                  : ''}>{info.value}</Col>
            </Row>
            {info.projects && <TableProjects projects={info.projects} isAscending={this.props.isAscending}/>}
          </div>)
      }
    </div>)
  }
}

export default TableInfo;
