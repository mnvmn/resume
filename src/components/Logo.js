import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div id="logo">
        <div className="title text-center">Let&apos;s build something in React...</div>
        {/* <div className="drawing position-absolute">
        <svg height="200" width="200">
          <polygon points="100,0 0,200 200,200" style={{
              fill: '#dcdcdc',
              stroke: '#bbbbbb',
              strokeWidth: 1
            }}/>
        </svg>
      </div> */}
      </div>
    );
  }
}

export default Logo;
