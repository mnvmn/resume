import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import dispatcher from '../store/dispatchers';
import reducer from '../store/reducers';

const DeployedDate = ({ repo }) => (
  <Moment format="Do MMM YYYY" date={repo.pushed_at} />
);

DeployedDate.propTypes = {
  repo: PropTypes.shape({
    pushed_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(reducer, dispatcher)(DeployedDate);
