import React from 'react';
import Str from './Str.js';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  render() {

    const lang = this.props.lang
    const projects = this.props.projects

    return (projects.map(project => <Row key={Math.random()}>
      <Col className="clearfix" xs="12">
        <div className="float-left">
          <Str msg={project.project} lang={lang} className="pl-1"/>
        </div>
        <div className="float-right text-right text-primary">
          <Str msg={project.skill} lang={lang}/>
        </div>
      </Col>
    </Row>))
  }
}

export default TableProjects;
