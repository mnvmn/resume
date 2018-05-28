import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as MatDesignIcons from 'react-icons/lib/md';
import Str from './Str';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';

class ContactInfo extends React.Component {
  static propTypes = {
    showIcons: PropTypes.bool,
    data: PropTypes.shape({
      contact: PropTypes.object,
    }).isRequired,
  };

  static defaultProps = {
    showIcons: false,
  };

  render() {
    return (
      <div>
        {this.props.data.contact && (
          <div>
            <div>
              {this.props.showIcons && <MatDesignIcons.MdMailOutline className="mr-2" />}
              <Str msg={this.props.data.contact.email.value} />
            </div>
            <div>
              {this.props.showIcons && <MatDesignIcons.MdPhone className="mr-2" />}
              <Str msg={this.props.data.contact.phone.value} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(reducer, dispatcher)(ContactInfo);
