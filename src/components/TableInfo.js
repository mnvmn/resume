import React from 'react';
import {Col, Row} from 'reactstrap';
import TableProjects from './TableProjects.js';
import Str from './Str.js';

class TableInfo extends React.Component {

  render() {
    const isAsc = this.props.isAsc === 'undefined' || this.props.isAsc
    const lang = this.props.lang
    const infoList = this.props.data
      ? (
        isAsc
        ? this.props.data
        : [...this.props.data].reverse())
      : []

    return <div className="mb-4">
      {
        this.props.title && <Row>
            <Col>
              <h5 className="text-label text-uppercase">
                <Str msg={this.props.title}/>
              </h5>
            </Col>
          </Row>
      }
      {
        infoList.map((info, index) => <div key={Math.random()}>
          <Row className={info.projects && index > 0
              ? 'mt-4'
              : ''}>
            <Col xs="5" lg="4" className={this.props.title
                ? 'text-primary'
                : 'text-dark'}>
              <Str msg={info.label} className={this.props.title
                  ? 'pl-1'
                  : ''}/>
            </Col>
            <Col xs="7" lg="8" className={info.projects
                ? 'font-weight-bold  text-label'
                : 'text-dark'}>
              <Str msg={info.value}/>
            </Col>
          </Row>
          {info.projects && <TableProjects projects={info.projects} isAsc={isAsc} lang={lang}/>}
        </div>)
      }
    </div>
  }
}

export default TableInfo;
