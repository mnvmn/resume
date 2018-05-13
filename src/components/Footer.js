import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import * as MatDesignIcons from 'react-icons/lib/md';
import Str from './Str';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';
import DeployedDate from './DeployedDate';
// import msgs from './../translations.json';

class Footer extends React.Component {
  static propTypes = {
    repo: PropTypes.shape({
      pushed_at: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.shape({
      contact: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { version } = React;
    return (
      <footer id="footer" className="mt-auto d-print-none pt-2">
        <div className="d-flex align-items-center">
          <Container className="text-muted">
            <Row>
              <Col className="text-sm text-left">
                <div>
                  <MatDesignIcons.MdMailOutline />
                  <Str msg={this.props.data.contact.email.value} className="ml-2" />
                </div>
                <div>
                  <MatDesignIcons.MdPhone />&nbsp;
                  <Str msg={this.props.data.contact.phone.value} className="ml-1" />
                </div>
              </Col>

              <Col className="text-sm text-right">
                <div>
                  {this.props.repo.pushed_at ? (
                    <span>
                      <span>Deployed</span>
                      &nbsp;
                      <span>
                        <DeployedDate />
                      </span>
                    </span>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
                <div>
                  <span>React v{version}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default connect(reducer, dispatcher)(Footer);
