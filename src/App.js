import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import dispatcher from './store/dispatchers';
import reducer from './store/reducers';
import PageCv from './pages/PageCv';
import PagePoster from './pages/PagePoster';
import Footer from './components/Footer';
import './css/main.css';

// import Logo from './components/Logo';

const URL_DATA = '/data.json';

class App extends Component {
  componentDidMount() {
    fetch(URL_DATA)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('fetch data failed');
      })
      .then(data => this.props.dataReceived(data))
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App  d-flex flex-column">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PageCv} />
            <Route exact path="/poster" component={PagePoster} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  dataReceived: PropTypes.func.isRequired,
};

export default connect(reducer, dispatcher)(App);
