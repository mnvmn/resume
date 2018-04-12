import React from 'react';

class Str extends React.Component {

  render() {
    const lang = this.props.lang;
    return (<span>{this.props.msg && this.props.msg[lang] ? this.props.msg[lang] : this.props.msg}</span>)
  }
}

export default Str;
