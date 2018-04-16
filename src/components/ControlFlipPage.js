import React from 'react';
import {Button} from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'

class ControlFlipPage extends React.Component {

  render() {
    return (<div className={'control-flipPage-' + this.props.orientation.toString()}>
      <Button color="context" size="md" href={this.props.href} className="btn-vertical">
        {this.props.orientation === 'right' && <FontAwesome.FaAngleRight/>}
        {this.props.orientation === 'left' && <FontAwesome.FaAngleLeft/>}
      </Button>
    </div>)
  }
}

export default ControlFlipPage
