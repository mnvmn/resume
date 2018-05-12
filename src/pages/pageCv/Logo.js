import React from 'react';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.num]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.num]),
    color: PropTypes.string,
  };

  static defaultProps = {
    width: '100',
    height: '100',
    color: '#0475dc',
  };

  render() {
    return (
      <div>
        <svg height={this.props.height} width={this.props.width} viewBox="0 0 100 100">
          <g
            id="layer1"
            transform="translate(0)"
            style={{
              fill: 'none',
              stroke: this.props.color,
              strokeWidth: 0.8,
            }}
          >
            <ellipse
              id="path4147"
              rx="46.681"
              ry="10.426"
              transform="matrix(-.37430 -.92731 .87601 -.48230 0 0)"
              cy="31.137"
              cx="-70.838"
            />
            <ellipse
              id="path4162"
              rx="12.386"
              ry="47.768"
              transform="matrix(.97745 .21117 -.66264 .74894 0 0)"
              cy="44.641"
              cx="78.695"
            />
            <ellipse
              id="path4164"
              rx="47.256"
              ry="11.284"
              transform="matrix(.98997 .14129 .038972 .99924 0 0)"
              cy="48.047"
              cx="48.685"
            />
            <g
              id="layer1"
              transform="translate(0)"
              style={{
                strokeWidth: 0.7,
              }}
            >
              <circle id="path4160" r="7.0059" cx="50.565" cy="51.292" />
              <path id="path4166" d="m43.646 50.318h13.772" />
              <path id="path4168" d="m43.646 53.202h13.772" />
              <path id="path4170" d="m44.328 48.209h12.345" />
              <path id="path4172" d="m45.817 46.069h9.4299" />
              <path id="path4176" d="m44.638 55.156h11.756" />
              <path id="path4178" d="m46.871 57.265h7.29" />
              <ellipse
                id="path4214"
                rx="6.2556"
                ry="6.9379"
                transform="scale(1,-1)"
                cy="-51.307"
                cx="50.487"
              />
              <path
                id="ellipse4216"
                transform="scale(1,-1)"
                d="m54.396-51.307a3.7686 6.9474 0 0 1 -3.7616 6.9474 3.7686 6.9474 0 0 1 -3.7756 -6.9216 3.7686 6.9474 0 0 1 3.7476 -6.9732 3.7686 6.9474 0 0 1 3.7895 6.8957"
              />
              <path id="path4218" d="m50.596 44.314c0.0098 5.2687 0.06617 10.17 0.06203 13.925" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Logo;
