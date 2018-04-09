import React from 'react';
import TableInfo from './TableInfo.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';

const REST_URL = '/data.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        info: [],
        education: [],
        work: [],
      },
      strings: {
        education: {
          en: 'education',
          sk: 'vzdelanie'
        },
        work: {
          en: 'work experience',
          sk: 'zamestnanie'
        }
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
    }));
  }

  changeLang() {
    this.setState(prevState => ({
      language: prevState.language == 'en' ? 'sk' : 'en'
    }));
  }

  componentDidMount() {

    this.setState({isLoading: true});

    fetch(REST_URL).then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(data => this.setState({data, isLoading: false})).catch(error => this.setState({error, isLoading: false}));
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('CV state', nextState)
  }

  render() {
    const lang = this.state.language
    const isAsc = this.state.isAscending;
    const data = this.state.data;
    return (<div className="cv-container">

      <Container>

        <h3 className="text-center font-weight-bold mt-2 mb-4">CV</h3>

        <TableInfo data={data.info} language={lang}/>

        <Controls btnHandler={this.changeOrder} changeLang={this.changeLang} isAscending={isAsc} language={lang}/>

        <TableInfo data={data.education} isAscending={isAsc} language={lang} title={this.state.strings.education[lang]}/>
        <TableInfo data={data.work} isAscending={isAsc} language={lang} title={this.state.strings.work[lang]}/>
      </Container>

    </div>)
  }
}

export default Cv;
