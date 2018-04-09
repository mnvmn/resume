import React from 'react';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  render() {

    const lang = this.props.language
    const projects = this.props.projects

    return (projects.map(project => <Row key={Math.random()}>
      <Col className="clearfix" xs="12">
        <div className="float-left">{project.project[lang] ? project.project[lang] : project.project}</div>
        <div className="float-right text-right text-primary">{project.skill && project.skill[lang] ? project.skill[lang] : project.skill}</div>
      </Col>
    </Row>))
  }
}

export default TableProjects;
