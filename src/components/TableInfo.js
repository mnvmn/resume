import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { TableProjects, projects } from './TableProjects';
import Str, { translation } from './Str';

export default class TableInfo extends React.Component {
  render() {
    const isAsc = this.props.isAsc === 'undefined' || this.props.isAsc;
    // const infoList = this.props.data
    //   ? isAsc ? this.props.data : [...this.props.data].reverse()
    //   : [];
    const { data } = this.props;
    const infoList = (function getInfoList() {
      if (data) {
        if (isAsc) {
          return data;
        }
        return [...data].reverse();
      }
      return [];
    }());

    return (
      <div className="mb-4">
        {this.props.title && (
          <Row>
            <Col>
              <h5 className="text-label text-uppercase">
                <Str msg={this.props.title} />
              </h5>
            </Col>
          </Row>
        )}
        {infoList.map((info, index) => (
          <div key={Math.random()}>
            <Row className={info.projects && index > 0 ? 'mt-4' : ''}>
              <Col xs="5" lg="4" className={this.props.title ? 'text-primary' : 'text-dark'}>
                <Str msg={info.label} className={this.props.title ? 'pl-1' : ''} />
              </Col>
              <Col
                xs="7"
                lg="8"
                className={info.projects ? 'font-weight-bold  text-label' : 'text-dark'}
              >
                <Str msg={info.value} />
              </Col>
            </Row>
            {info.projects && <TableProjects projects={info.projects} isAsc={isAsc} />}
          </div>
        ))}
      </div>
    );
  }
}

TableInfo.propTypes = {
  isAsc: PropTypes.bool.isRequired,
  title: translation,
  data: PropTypes.shape({
    label: translation,
    value: translation,
    projects,
  }).isRequired,
};

TableInfo.defaultProps = {
  title: '',
};
