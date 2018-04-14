import React from 'react';
import Str from './Str.js';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  render() {

    const lang = this.props.lang
    const projects = this.props.projects

    return (projects.map(project => <Row key={Math.random()}>
      <Col className="clearfix" xs="12">
        <div className="float-left  text-dark">
          <Str msg={project.project} className="pl-1"/>
        </div>
        <div className="float-right text-right text-secondary">
          <Str msg={project.skill}/>
        </div>
      </Col>
    </Row>))
  }
}

export default TableProjects;
