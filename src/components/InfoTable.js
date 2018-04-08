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
            <Col xs="6">{data.label}</Col>
            <Col xs="6">{data.value}</Col>
          </Row>
          {
            data.projects && data.projects.map(project => <div key={project.project}>
              <Row>
                <Col xs="12">{project.project}</Col>
                <Col xs="12" className="text-right">{project.skill}</Col>
              </Row>
            </div>)
          }
        </div>)
      }
    </div>)
  }
}

export default InfoTable;
