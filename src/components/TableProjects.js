import React from 'react';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  render() {
    // const projects = this.props.isAscending
    //   ? this.props.projects
    //   : [...this.props.projects].reverse()
    const projects = this.props.projects

    return (projects.map(project => <Row  key={Math.random()}>
      <Col className="clearfix" xs="12">
        <div className="float-left">{project.project}</div>
        <div className="float-right text-right text-primary">{project.skill}</div>
      </Col>
    </Row>))
  }
}

export default TableProjects;
