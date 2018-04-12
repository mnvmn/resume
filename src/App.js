import React, {Component} from 'react';
import Cv from './components/Cv.js';
// import logo from './logo.svg';
import Footer from './components/Footer.js';
import './css/main.css';


class App extends Component {
  render() {
    return (
      <div className="App  d-flex flex-column">

        <Cv/>
        <Footer/>

      </div>);
  }
}

export default App;
