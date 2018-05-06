import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';

class DeployedDate extends React.Component {
  static propTypes = {
    repo: PropTypes.shape({
      pushed_at: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return <Moment format="Do MMM YYYY" date={this.props.repo.pushed_at} />;
  }
}

export default connect(reducer, dispatcher)(DeployedDate);
