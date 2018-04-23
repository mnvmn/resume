import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scene from './../movie/Scene';

class Animation extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.scene = Scene.init(this.props.width, this.props.height);
    this.el.appendChild(this.scene.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.el.removeChild(this.scene.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  }

  stop() {
    window.cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.scene.renderFrame();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <div
        className="animation"
        style={{ width: `${this.props.width}px`, height: `${this.props.height}px` }}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

Animation.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Animation.defaultProps = {
  width: 200,
  height: 200,
};

export default Animation;
