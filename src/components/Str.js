import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reducerLanguage } from './../store/reducers';

class Str extends React.Component {
  static createLinks(str) {
    const links = str.match(/www\.[\w.]*/g);

    let initialIndex = 0;
    if (links && links.length > 0) {
      const buffer = links.reduce((buff, link) => {
        const index = str.indexOf(link);
        const text = str.substr(initialIndex, index - initialIndex);

        initialIndex += text.length + link.length;

        buff.push(<span key={`${link}a`}>{text}</span>);
        const aa = (
          <a className="btn-link" key={`${link}`} target="_blank" href={`http://${link}`}>
            {link}
          </a>
        );
        buff.push(aa);

        return buff;
      }, []);

      // initialIndex

      return buffer;
    }
    return str;
  }

  render() {
    const { lang } = this.props;
    const { msg } = this.props;
    const trans = msg && msg[lang] ? msg[lang] : msg;

    // console.log('translating:', lang, msg, trans)

    const finalText = trans ? Str.createLinks(trans) : '';

    return <div className={this.props.className}>{finalText}</div>;
  }
}

export const translation = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    en: PropTypes.string,
    sk: PropTypes.string,
  }),
]);

Str.defaultProps = {
  className: '',
};

Str.propTypes = {
  lang: PropTypes.string.isRequired,
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
};

export default connect(reducerLanguage, {})(Str);
