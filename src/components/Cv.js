import React from 'react';
import {Container} from 'reactstrap';
import TableInfo from './TableInfo.js';
import Controls from './Controls.js';
import msgs from './../translations.json';

const URL_DATA = '/data.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);

    this.changeOrder = this.changeOrder.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }

  componentDidMount() {

    this.setState({isLoading: true});

    fetch(URL_DATA).then(response => {
      // console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('fetch data failed');
      }
    }).then(data => this.setState({data: data, isLoading: false})).catch(error => this.setState({error, isLoading: false}));
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('updated state', nextState)
  }

  render() {
    const lang = this.state.lang
    const isAsc = this.state.isAsc;
    const data = this.state.data;
    return (<div className="cv-container">
      <Container>
        <h3 className="text-center text-dark mt-2 mb-4">CV</h3>
        <TableInfo data={data.info} lang={lang}/>
        <TableInfo data={data.education} isAsc={isAsc} title={msgs.title.education} lang={lang}/>
        <TableInfo data={data.work} isAsc={isAsc} title={msgs.title.work} lang={lang}/>
      </Container>
    </div>)
  }
}

const mapStateToProps = state => {
  return {todo: state.todos[0]}
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cv)
