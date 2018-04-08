import React from 'react';
import {Col, Row} from 'reactstrap';

class InfoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (<div className="mb-4">
      {
        this.props.title && <Row>
            <Col>
              <h5 className="ml-1 font-weight-bold">{this.props.title}</h5>
            </Col>
          </Row>
      }
      {
        this.props.data && this.props.data.map(data => <div key={data.label}>
          <Row>
            <Col>{data.label}</Col>
            <Col>{data.value}</Col>
          </Row>
{
  // data.projects ? 'YES' : 'NO'
  // this.props.data && this.props.data.map(data => <div key={data.label}>
}

        </div>)
      }

    </div>)
  }
}

export default InfoTable;
