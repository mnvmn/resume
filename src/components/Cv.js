import React from 'react';
import TableInfo from './TableInfo.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';
import msgs from './../translations.json';

const REST_URL = '/data.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);

    const localSettings = this.loadLocal();
    this.state = {
      data: {
        info: [],
        education: [],
        work: []
      },
      isLoading: false,
      isAscending: isAsc !== null
        ? isAsc
        : this.props.isAscending,
      lang: localSettings.lang !== null
        ? lang
        : this.props.lang
    };

    this.changeOrder = this.changeOrder.bind(this);
    this.changeLanguage = this.changeLang.bind(this);
  }

  changeOrder() {
    this.setState(prevState => ({
      isAscending: !prevState.isAscending
    }), function() {
      this.saveLocal('isAscending', this.state.isAscending.toString());
    });
  }

  changeLanguage() {
    this.setState(prevState => ({
      lang: prevState.lang === 'en'
        ? 'sk'
        : 'en'
    }), function() {
      this.saveLocal('lang', this.state.lang);
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
    // console.log('updated state', nextState)
  }

  saveLocal(key, val) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem(key, val);
      console.log('storing local', key, val)
    }
  }

  loadLocal() {
    const hasLocalStorage = typeof(Storage) !== 'undefined';

    return {
      lang: hasLocalStorage
        ? localStorage.getItem('lang')
        : null,
      isAsc: hasLocalStorage
        ? localStorage.getItem('isAscending') === 'true'
        : null
    }
  }

  render() {
    const lang = this.state.lang
    const isAsc = this.state.isAscending;
    const data = this.state.data;
    return (<div className="cv-container">
      <Container>
        <h3 className="text-center font-weight-bold mt-2 mb-4">CV</h3>
        <TableInfo data={data.info} lang={lang}/>
        <Controls changeOrder={this.changeOrder} changeLang={this.changeLang} isAscending={isAsc} lang={lang}/>
        <TableInfo data={data.education} isAscending={isAsc} title={msgs.title.education} lang={lang}/>
        <TableInfo data={data.work} isAscending={isAsc} title={msgs.title.work} lang={lang}/>
      </Container>
    </div>)
  }
}

Cv.defaultProps = {
  isAscending: true,
  lang: 'en'
}

export default Cv;
