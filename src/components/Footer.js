import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';

class Footer extends React.Component {
  static propTypes = {
    repo: PropTypes.shape({
      pushed_at: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { version } = React;
    return (
      <footer id="footer" className="mt-auto d-print-none">
        <div className="d-flex align-items-center">
          <Container>
            <Row>
              {this.props.repo.pushed_at && (
                <Col className="text-sm text-left text-muted">
                  <small>
                    <span>Deployed</span>
                    &nbsp;
                    <span className="font-weight-bold">
                      <Moment format="Do MMM YYYY" date={this.props.repo.pushed_at} />
                    </span>
                  </small>
                </Col>
              )}
              <Col className="text-sm text-right text-muted">
                <small>
                  <span>#</span>
                  &nbsp;
                  <span className="font-weight-bold">React v{version}</span>
                </small>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default connect(reducer, dispatcher)(Footer);
