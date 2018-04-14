import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';
import TableInfo from './TableInfo.js';
import Controls from './Controls.js';
import msgs from './../translations.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('updated state', nextState)
  }

  render() {
    const data = this.props.data;

    return (<div className="cv-container">
      <Container>
        <h3 className="text-center text-dark mt-2 mb-4">CV</h3>
        <TableInfo data={data.info}/>
        <TableInfo data={data.education} title={msgs.title.education}/>
        <TableInfo data={data.work} title={msgs.title.work}/>
      </Container>
    </div>)
  }
}

const mapStateToProps = state => {
  return {data: state.data}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cv)
