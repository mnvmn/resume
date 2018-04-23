import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import TableInfo from './TableInfo';
import msgs from './../translations.json';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';

class Cv extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div id="cv-container">
        <Container>
          <h3 className="text-center text-dark mt-2 mb-4">CV</h3>
          <TableInfo data={data.info} isAsc sectionName="info" />
          <TableInfo data={data.education} title={msgs.title.education} isAsc={this.props.isAsc} sectionName="education" />
          <TableInfo data={data.work} title={msgs.title.work} isAsc={this.props.isAsc} sectionName="work" />
        </Container>
      </div>
    );
  }
}

Cv.propTypes = {
  data: PropTypes.shape({
    info: PropTypes.array,
    education: PropTypes.array,
    work: PropTypes.array,
  }).isRequired,
  isAsc: PropTypes.bool.isRequired,
};

export default connect(reducer, dispatcher)(Cv);
