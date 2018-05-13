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
          <Container>
            <Row>
              <Col className="text-sm text-left text-muted">
                {/* <h3 className="text-center text-dark mt-2 mb-4 text-uppercase">
                  <Str msg={msgs.title.contact} />
                </h3> */}

                {this.props.data.contact.map(info => (
                  <Row key={info.label}>
                    <Col xs="5" md="3" className="text-dark">
                      <Str msg={info.label} />
                    </Col>
                    <Col xs="7" md="5" lg="4" className="text-dark">
                      <Str msg={info.value} />
                    </Col>
                  </Row>
                ))}
              </Col>

              <Col className="text-sm text-right text-muted">
                <div>
                  {this.props.repo.pushed_at ? (
                    <span>
                      <span>Deployed</span>
                      &nbsp;
                      <span className="font-weight-bold">
                        <DeployedDate />
                      </span>
                    </span>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
                <div>
                  <span>#</span>
                  &nbsp;
                  <span className="font-weight-bold">React v{version}</span>
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
