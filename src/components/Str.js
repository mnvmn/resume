import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reducerLanguage } from './../store/reducers';

class Str extends React.Component {
  static defaultProps = {
    className: '',
    msg: null,
  };

  static propTypes = {
    lang: PropTypes.string.isRequired,
    msg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
  };

  static createLinks(str) {
    const links = str.match(/www\.[\w.]*/g);
    let processingIndex = 0;
    if (links && links.length > 0) {
      const buffer = links.reduce((buff, link) => {
        const indexOfLink = str.indexOf(link);
        const text = str.substr(processingIndex, indexOfLink - processingIndex);
        buff.push(<span key={buff.length}>{text}</span>);

        processingIndex += text.length + link.length;
        const linkElement = (
          <a className="btn-link" key={buff.length} target="_blank" href={`http://${link}`}>
            {link}
          </a>
        );
        buff.push(linkElement);
        return buff;
      }, []);

      if (processingIndex < str.length) {
        const subtextLength = str.length - processingIndex;
        const text = str.substr(processingIndex, subtextLength);
        buffer.push(<span key={buffer.length}>{text}</span>);
      }

      return buffer;
    }
    return str;
  }

  render() {
    const { lang } = this.props;
    const { msg } = this.props;
    const trans = msg && msg[lang] ? msg[lang] : msg;
    return trans ? <span className={this.props.className}>{Str.createLinks(trans)}</span> : null;
  }
}

export const translation = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    en: PropTypes.string,
    sk: PropTypes.string,
  }),
]);

export default connect(reducerLanguage, {})(Str);
