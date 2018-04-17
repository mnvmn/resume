import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Moment from 'react-moment';

const URL_REPO = 'https://api.github.com/repos/mnvmn/mnvmn.github.io';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: {},
    };
  }

  componentDidMount() {
    fetch(URL_REPO)
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          return response.json();
        }
        throw new Error('fetch repo failed');
      })
      .then(data => this.setState({ repo: data }));
    // .catch(error => console.log(error));
  }

  render() {
    const { version } = React;
    return (
      <footer id="footer" className="mt-auto">
        <div className="d-flex align-items-center">
          {/* <div id="bootstrap-grid-util" className="position-absolute">
          <span className="d-sm-none">XS</span>
          <span className="d-none d-sm-block d-md-none">SM</span>
          <span className="d-none d-md-block d-lg-none">MD</span>
          <span className="d-none d-lg-block d-xl-none">LG</span>
          <span className="d-none d-xl-block">XL</span>
        </div> */}

          <Container>
            <Row>
              {this.state.repo.pushed_at && (
                <Col className="text-sm text-left text-muted">
                  <small>
                    <span>Deployed</span>
                    &nbsp;
                    <span className="font-weight-bold">
                      <Moment format="Do MMM YYYY" date={this.state.repo.pushed_at} />
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

export default Footer;
