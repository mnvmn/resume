import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import dispatcher from './store/dispatchers';
import reducer from './store/reducers';
import PageCv from './pages/pageCv/PageCv';
import PageContact from './pages/pageContact/PageContact';
import Footer from './components/Footer';
import GridUtil from './components/GridUtil';
import './css/main.css';

// import Logo from './components/Logo';

const URL_DATA = '/data.json';
const URL_REPO = 'https://api.github.com/repos/mnvmn/mnvmn.github.io';

class App extends Component {
  componentDidMount() {
    const { receivedCvData, receivedRepoData } = this.props;
    fetch(URL_REPO)
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          return response.json();
        }
        throw new Error('fetch repo failed');
      })
      .then((data) => receivedRepoData(data));

    fetch(URL_DATA)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('fetch data failed');
      })
      .then((data) => receivedCvData(data));
    // .catch(error => ));
  }

  render() {
    return (
      <div className="App  d-flex flex-column">
        <GridUtil />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PageCv} />
            <Route exact path="/contact" component={PageContact} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  receivedCvData: PropTypes.func.isRequired,
  receivedRepoData: PropTypes.func.isRequired,
};

export default connect(reducer, dispatcher)(App);
