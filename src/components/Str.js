import React from 'react';

class Str extends React.Component {

  render() {
    const lang = this.props.lang;
    const msg = this.props.msg;
    const trans = msg && msg[lang]
      ? msg[lang]
      : msg;

    const finalText = trans
      ? this.findLinks(trans)
      : ''

    return (<div>{finalText}</div>)
  }

  findLinks(str) {
    const that = this
    const links = str.match(/www\.[\w\.]*/g);
    links && console.log(links);

    let initialIndex = 0
    if (links && links.length > 0) {
      let buffer = links.reduce(function(buff, link) {
        const index = str.indexOf(link);
        const text = str.substr(initialIndex, index);

        console.log(text.length, text)
        console.log(link.length, link)
        initialIndex += (text.length + link.length);

        buff.push(<span key={Math.random()}>{text}</span>);
        buff.push(<a key={Math.random()} href={link}>{link}</a>);

        return buff;
      }, [])

      return buffer
    } else {
      return str;
    }
  }

  makeLink(substr) {
    return <a href={substr}>substr</a>
  }
}

export default Str;
