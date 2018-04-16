import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';

class ControlFlipPage extends React.Component {
  render() {
    return (
      <div className={`control-flipPage-${this.props.orientation.toString()}`}>
        <Button color="context" size="md" className="btn-vertical d-flex align-items-center">
          {this.props.orientation === 'right' && <FontAwesome.FaAngleRight />}
          {this.props.orientation === 'left' && <FontAwesome.FaAngleLeft />}
        </Button>
      </div>
    );
  }
}

ControlFlipPage.propTypes = {
  orientation: PropTypes.boolean,
};

export default ControlFlipPage;
