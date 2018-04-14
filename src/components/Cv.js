import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';
import TableInfo from './TableInfo.js';
import msgs from './../translations.json';
import dispatcher from './../store/dispatchers.js';
import reducer from './../store/reducers.js';


class Cv extends React.Component {
  render() {
    const data = this.props.data;
    console.log(this.props.isAsc);

    return (<div className="cv-container">
      <Container>
        <h3 className="text-center text-dark mt-2 mb-4">CV</h3>
        <TableInfo data={data.info} isAsc={true}/>
        <TableInfo data={data.education} title={msgs.title.education} isAsc={this.props.isAsc}/>
        <TableInfo data={data.work} title={msgs.title.work} isAsc={this.props.isAsc}/>
      </Container>
    </div>)
  }
}

export default connect(reducer, dispatcher)(Cv)
