import React, {Component} from 'react';
import Cv from './Cv';
import logo from './logo.svg';
import './App.css';
import('bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cv/>
      </div>);
  }
}

export default App;
