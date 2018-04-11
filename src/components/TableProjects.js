import React from 'react';
import Str from './Str.js';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  render() {

    const lang = this.props.language
    const projects = this.props.projects

    return (projects.map(project => <Row key={Math.random()}>
      <Col className="clearfix" xs="12">
        <div className="float-left">
          <Str msg={project.project} lang={lang}/>
        </div>
        <div className="float-right text-right text-primary">
          <Str msg={project.project} lang={lang}/>
        </div>
      </Col>
    </Row>))
  }
}

export default TableProjects;
