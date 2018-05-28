import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';
import DeployedDate from './DeployedDate';
import ContactInfo from './ContactInfo';

// import msgs from './../translations.json';

class Footer extends React.Component {
  static propTypes = {
    repo: PropTypes.shape({
      pushed_at: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { version } = React;
    return (
      <footer id="footer" className="mt-auto d-print-none pt-2">
        <div className="d-flex align-items-center">
          <Container className="text-muted">
            <Row>
              <ContactInfo showIcons />

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
