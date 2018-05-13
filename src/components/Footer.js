import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
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
      contact: PropTypes.array,
    }).isRequired,
  };

  render() {
    const { version } = React;
    return (
      <footer id="footer" className="mt-auto d-print-none">
        <div className="d-flex align-items-center">
          <Container className="text-muted">
            <Row>
              <Col className="text-sm text-left">
                {this.props.data.contact.map(info => (
                  // title="<Str msg={info.label} />
                  <div key={info.label}>
                    <Str msg={info.value} />
                  </div>
                ))}
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
