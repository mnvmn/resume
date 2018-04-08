import React from 'react';
import {Col, Row} from 'reactstrap';

class TableProjects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: props.projects
    };
  }

  render() {
    return (this.state.projects.map(project => <div key={project.project} className="clearfix">
        <div className="float-left">{project.project}</div>
        <div className="float-right text-right text-primary">{project.skill}</div>
    </div>))
  }
}

export default TableProjects;
