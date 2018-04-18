import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Str, { translation } from './Str';

export class TableProjects extends React.Component {
  render() {
    const { projects } = this.props;

    return projects.map(project => (
      <Row key={Math.random()}>
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

export const projects = PropTypes.arrayOf(PropTypes.shape({
  project: translation,
  skill: translation,
}));

TableProjects.propTypes = {
  projects: projects.isRequired,
};
