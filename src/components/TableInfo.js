import React from 'react';
import {Col, Row} from 'reactstrap';
import TableProjects from './TableProjects.js';

class TableInfo extends React.Component {

  render() {

    const lang = this.props.language
    const infoList = this.props.data
      ? (
        this.props.isAscending
        ? this.props.data
        : [...this.props.data].reverse())
      : ''

    return (<div className="mb-4">
      {
        this.props.title && <Row>
            <Col>
              <h5 className="ml-1 font-weight-bold text-uppercase">{
                  this.props.title[lang]
                    ? this.props.title[lang]
                    : this.props.title
                }</h5>
            </Col>
          </Row>
      }
      {
        (
          this.props.title
          ? infoList
          : this.props.data).map((info, index) => <div key={Math.random()}>
            <Row className={info.projects && index > 0
                ? 'mt-4'
                : ''}>
              <Col xs="6" className={this.props.title
                  ? 'text-primary'
                  : ''}>{
                  info.label[lang]
                    ? info.label[lang]
                    : info.label
                }
              </Col>
              <Col xs="6" className={info.projects
                  ? 'font-weight-bold'
                  : ''}>{
                  info.value[lang]
                    ? info.value[lang]
                    : info.value
                }</Col>
            </Row>
            {info.projects && <TableProjects projects={info.projects} isAscending={this.props.isAscending} language={lang}/>}
          </div>)
      }
    </div>)
  }
}

export default TableInfo;
