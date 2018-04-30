import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import dispatcher from './store/dispatchers';
import reducer from './store/reducers';
import PageCv from './pages/PageCv';
import PageMovie from './pages/PageMovie';
import PageContact from './pages/PageContact';
import Footer from './components/Footer';
import GridUtil from './components/GridUtil';
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
      .then(data => this.props.dataReceived(data));
    // .catch(error => ));
  }

  render() {
    return (
      <div className="App  d-flex flex-column">
        <GridUtil />
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="pageRoll" timeout={200}>
                  <Switch location={location}>
                    <Route exact path="/" component={PageCv} />
                    <Route exact path="/contact" component={PageContact} />
                    <Route exact path="/animation" component={PageMovie} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
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
