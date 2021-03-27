import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { projects, TableProjects } from './TableProjects';
import Str, { translation } from '../../components/Str';

const TableInfo = (props) => {
  const {
    title, sectionName, data, isAsc,
  } = props;

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
    <section className={`mb-4 ${sectionName}`}>
      {title && (
        <Row>
          <Col>
            <h5 className="text-label text-uppercase">
              <Str msg={title} />
            </h5>
          </Col>
        </Row>
      )}
      {infoList.map((info, index) => (
        <div
          key={info.label.en ? info.label.en : info.label}
          className={`entry${index === 0 ? ' first' : ''}`}
        >
          <Row>
            <Col xs="5" lg="4" className={title ? 'text-primary' : 'text-dark'}>
              <Str msg={info.label} className={title ? 'pl-1' : ''} />
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
    </section>
  );
};

TableInfo.propTypes = {
  isAsc: PropTypes.bool,
  title: translation,
  sectionName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    label: translation,
    value: translation,
    projects,
  })).isRequired,
};

TableInfo.defaultProps = {
  title: '',
  isAsc: false,
};

export default TableInfo;
