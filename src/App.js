import React, {Component} from 'react';
import {connect} from 'react-redux';
import dispatcher from './store/dispatchers.js';
import reducer from './store/reducers.js';
import PageCv from './pages/Cv.js';
import Footer from './components/Footer.js';
import './css/main.css';
// import Logo from './components/Logo.js';

const URL_DATA = '/data.json';

class App extends Component {

  componentDidMount() {
    fetch(URL_DATA).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('fetch data failed');
      }
    }).then(data => this.props.dataReceived(data)).catch(error => this.setState({error}));
  }

  render() {
    return (<div className="App  d-flex flex-column">

      <PageCv/>
      <Footer/>

    </div>);
  }
}

export default connect(reducer, dispatcher)(App)
