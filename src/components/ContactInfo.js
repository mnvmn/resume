import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
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
      <Col className="text-sm text-left">
        {this.props.data.contact && (
          <div>
            <div>
              {this.props.showIcons && <MatDesignIcons.MdMailOutline />}
              <Str msg={this.props.data.contact.email.value} className="ml-2" />
            </div>
            <div>
              {this.props.showIcons && <MatDesignIcons.MdPhone />}
              <Str msg={this.props.data.contact.phone.value} className="ml-2" />
            </div>
          </div>
        )}
      </Col>
    );
  }
}

export default connect(reducer, dispatcher)(ContactInfo);
