import React, {Component} from 'react';
import Cv from './components/Cv.js';
// import logo from './logo.svg';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Cv/>
        <Footer/>

      </div>);
  }
}

export default App;
