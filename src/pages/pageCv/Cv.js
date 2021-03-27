import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import TableInfo from './TableInfo';
import msgs from '../../translations.json';
import dispatcher from '../../store/dispatchers';
import reducer from './../../store/reducers';

class Cv extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      info: PropTypes.array,
      education: PropTypes.array,
      work: PropTypes.array,
    }).isRequired,
    isAsc: PropTypes.bool.isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <div id="cv-container">
        <div className="d-print-none mt-1 mt-md-2 mt-lg-4 mt-xl-5" />
        <Container>
          <TableInfo data={data.info} isAsc sectionName="info" />
          <TableInfo
            data={data.work}
            title={msgs.title.work}
            isAsc={this.props.isAsc}
            sectionName="work"
          />
          <TableInfo
            data={data.education}
            title={msgs.title.education}
            isAsc={this.props.isAsc}
            sectionName="education"
          />
        </Container>
      </div>
    );
  }
}

export default connect(reducer, dispatcher)(Cv);
