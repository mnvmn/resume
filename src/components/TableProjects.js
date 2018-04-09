import React from 'react';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: props.projects,
      isAscending: props.isAscending
    };
  }

  render() {

    const projects = this.state.isAscending
      ? this.state.projects
      : [...this.state.projects].reverse()

    return (projects.map(project => <Row  key={Math.random()}>
      <Col className="clearfix" xs="12">
        <div className="float-left">{project.project}</div>
        <div className="float-right text-right text-primary">{project.skill}</div>
      </Col>
    </Row>))
  }
}

export default TableProjects;
