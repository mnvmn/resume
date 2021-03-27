import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as MatDesignIcons from 'react-icons/md';
import Str from './Str';
import dispatcher from '../store/dispatchers';
import reducer from '../store/reducers';

const ContactInfo = ({ showIcons, data }) => (
  <div>
    {data.contact && (
      <div>
        <div>
          {showIcons && <MatDesignIcons.MdMailOutline className="mr-2" />}
          <Str msg={data.contact.email.value} />
        </div>
        <div>
          {showIcons && <MatDesignIcons.MdPhone className="mr-2" />}
          <Str msg={data.contact.phone.value} />
        </div>
      </div>
    )}
  </div>
);

ContactInfo.propTypes = {
  showIcons: PropTypes.bool,
  data: PropTypes.shape({
    contact: PropTypes.object,
  }).isRequired,
};

ContactInfo.defaultProps = {
  showIcons: false,
};

export default connect(reducer, dispatcher)(ContactInfo);
