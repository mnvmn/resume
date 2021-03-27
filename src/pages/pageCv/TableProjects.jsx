import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Str, { translation } from '../../components/Str.jsx';

export const projects = PropTypes.arrayOf(PropTypes.shape({
  project: translation,
  skill: translation,
}));

export class TableProjects extends React.Component {
  static propTypes = {
    projects: projects.isRequired,
  };

  render() {
    return this.props.projects.map((project) => (
      <Row key={project.project.en}>
        <Col className="clearfix" xs="12">
          <Str msg={project.project} className="ml-1 d-inline-block text-dark" />
          <Str msg={project.skill} className="float-right text-right text-secondary" />
        </Col>
      </Row>
    ));
  }
}
