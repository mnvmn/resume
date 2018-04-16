import React from 'react';
import {ButtonGroup, Button} from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'
import Str from './Str.js';

class ControlFlipPage extends React.Component {

  render() {

    return (<div className="control-flipPage">
      <Button color="context" size="md" href="/poster" className="btn-vertical">
      {this.props.orientation === 'right'&& <FontAwesome.FaAngleRight/>}
      {this.props.orientation === 'left'&& <FontAwesome.FaAngleLeft/>}
      </Button>
    </div>)
  }
}

export default ControlFlipPage
