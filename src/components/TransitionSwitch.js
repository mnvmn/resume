import React from 'react';

export default class Transition extends React.Component {
  componentWillAppear(callback) {
    // do something when the component will appear
    callback();
  }

  componentDidAppear() {
    // do something when the component appeared
  }

  componentWillEnter(callback) {
    // do something when the component will enter
    callback();
  }

  componentDidEnter() {
    // do something when the component entered
  }

  componentWillLeave(callback) {
    // do something when the component will leave
    callback();
  }

  componentDidLeave() {
    // do something when the component has left
  }

  render() {
    return <div className="example-app__transition">{this.props.children}</div>;
  }
}
