import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Str, { translation } from './../../components/Str';

export const projects = PropTypes.arrayOf(PropTypes.shape({
  project: translation,
  skill: translation,
}));

export class TableProjects extends React.Component {
  static propTypes = {
    projects: projects.isRequired,
  };

  render() {
    return this.props.projects.map(project => (
      <Row key={project.project.en}>
        <Col className="clearfix" xs="12">
          <div className="float-left  text-dark">
            <Str msg={project.project} className="pl-1" />
          </div>
          <div className="float-right text-right text-secondary">
            <Str msg={project.skill} />
          </div>
        </Col>
      </Row>
    ));
  }
}
