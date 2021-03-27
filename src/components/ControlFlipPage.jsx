import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import * as FontAwesome from 'react-icons/fa';

const ControlFlipPage = ({ orientation, className }) => (
  <div
    className={`control-flipPage-${orientation.toString()} d-print-none ${className}`}
  >
    <Button color="context" size="md" className="btn-vertical d-flex align-items-center">
      {orientation === 'right' && <FontAwesome.FaAngleRight />}
      {orientation === 'left' && <FontAwesome.FaAngleLeft />}
    </Button>
  </div>
);

ControlFlipPage.defaultProps = {
  className: '',
};

ControlFlipPage.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.string.isRequired,
};

export default ControlFlipPage;
