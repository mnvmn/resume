import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import * as FontAwesome from 'react-icons/fa';

class ControlFlipPage extends React.Component {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
    orientation: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div
        className={`control-flipPage-${this.props.orientation.toString()} d-print-none ${this.props.className}`}
      >
        <Button color="context" size="md" className="btn-vertical d-flex align-items-center">
          {this.props.orientation === 'right' && <FontAwesome.FaAngleRight />}
          {this.props.orientation === 'left' && <FontAwesome.FaAngleLeft />}
        </Button>
      </div>
    );
  }
}

export default ControlFlipPage;
