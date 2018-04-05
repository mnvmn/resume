import React, {Component} from 'react';
import logo from './logo.svg';
import {Parallax, Button, Icon, Row, Col} from 'react-materialize';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header> */
      }

      <div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <div className="section white">
          <div className="row container">

            <h2 className="header">CV</h2>

            <Button className="red lighten-2" waves='light' title="translate">
              {/* <Icon>swap_vert</Icon> */}
              {/* <Icon>low_priority</Icon> */}
              Translate
              <Icon left>subject</Icon>
              
            </Button>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
      </div>

    </div>);
  }
}

export default App;
