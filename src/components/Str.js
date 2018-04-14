import React from 'react';
import {connect} from 'react-redux';
import {reducerLanguage} from './../store/reducers.js';

class Str extends React.Component {

  render() {
    const lang = this.props.lang;
    const msg = this.props.msg;
    const trans = msg && msg[lang]
      ? msg[lang]
      : msg;

    console.log('translating:', lang, msg, trans)

    const finalText = trans
      ? this.createLinks(trans)
      : ''

    return (<div className={this.props.className}>{finalText}</div>)
  }

  createLinks(str) {
    const links = str.match(/www\.[\w.]*/g);

    let initialIndex = 0
    if (links && links.length > 0) {
      let buffer = links.reduce(function(buff, link) {
        const index = str.indexOf(link);
        const text = str.substr(initialIndex, index - initialIndex);

        initialIndex += (text.length + link.length);

        buff.push(<span key={link + 'a'}>{text}</span>);
        buff.push(<a className="btn-link" key={link + 'b'} target="_blank" href={'http://' + link}>{link}</a>);

        return buff;
      }, [])

      // initialIndex

      return buffer
    } else {
      return str;
    }
  }
}

export default connect(reducerLanguage, {})(Str)
