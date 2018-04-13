import React from 'react';

class Str extends React.Component {

  render() {
    const lang = this.props.lang;
    const msg = this.props.msg;
    const trans = msg && msg[lang]
      ? msg[lang]
      : msg;

    const finalText = trans
      ? this.createLinks(trans)
      : ''

    return (<div>{finalText}</div>)
  }

  createLinks(str) {
    const links = str.match(/www\.[\w\.]*/g);

    let initialIndex = 0
    if (links && links.length > 0) {
      let buffer = links.reduce(function(buff, link) {
        const index = str.indexOf(link);
        const text = str.substr(initialIndex, index - initialIndex);

        initialIndex += (text.length + link.length);

        buff.push(<span key={link + 'a'}>{text}</span>);
        buff.push(<a key={link + 'b'} href={link}>{link}</a>);

        return buff;
      }, [])

      // initialIndex

      return buffer
    } else {
      return str;
    }
  }
}

export default Str;
