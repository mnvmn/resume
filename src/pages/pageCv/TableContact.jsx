import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import msgs from '../../translations.json';
import Str from '../../components/Str';

export default class TableContact extends React.Component {
  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h5 className="text-label text-uppercase">
              <Str msg={msgs.title.contact} />
            </h5>
          </Col>
        </Row>

        {this.props.data.map((info) => (
          <div key={info.label}>
            <Str msg={info.label} />
            <Str msg={info.value} />
          </div>
        ))}
      </div>
    );
  }
}
