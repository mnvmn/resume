import React from 'react';
import TableInfo from './TableInfo.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';
import msgs from './../translations.json';

const REST_URL = '/data.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        info: [],
        education: [],
        work: []
      },
      isLoading: false,
      isAscending: true,
      language: 'en'
    };

    this.changeOrder = this.changeOrder.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }

  changeOrder() {
    this.setState(prevState => ({
      isAscending: !prevState.isAscending
    }), function() {
      this.saveLocal("isAscending", this.state.isAscending);
    });
  }

  changeLang() {
    this.setState(prevState => ({
      language: prevState.language === 'en'
        ? 'sk'
        : 'en'
    }), function() {
      this.saveLocal("language", this.state.language);
    });
  }

  componentDidMount() {

    this.setState({isLoading: true});

    fetch(REST_URL).then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        console.log('fetch failed');
        throw new Error('Something went wrong ...');
      }
    }).then(data => this.setState({data, isLoading: false})).catch(error => this.setState({error, isLoading: false}));
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('CV state', nextState.language)
  }

  saveLocal(key, val) {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(key, val);
      console.log('storing local', key, val)
    }
  }

  render() {
    const lang = this.state.language
    const isAsc = this.state.isAscending;
    const data = this.state.data;
    return (<div className="cv-container">
      <Container>
        <h3 className="text-center font-weight-bold mt-2 mb-4">CV</h3>
        <TableInfo data={data.info} language={lang}/>
        <Controls changeOrder={this.changeOrder} changeLang={this.changeLang} isAscending={isAsc} language={lang}/>
        <TableInfo data={data.education} isAscending={isAsc} title={msgs.title.education} language={lang}/>
        <TableInfo data={data.work} isAscending={isAsc} title={msgs.title.work} language={lang}/>
      </Container>
    </div>)
  }
}

export default Cv;
