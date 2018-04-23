import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';
import msgs from './../translations.json';
import Str from './Str';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';

class Controls extends React.Component {
  render() {
    // const isAsc = this.props.isAsc;
    const { isAsc } = this.props;
    const groupClass = `d-flex${
      this.props.isVertical ? ' btn-group-vertical rounded-0' : ' ml-auto justify-content-end'
    }`;
    const btnSize = this.props.isVertical ? 'sm' : 'xs';
    const btnClass = `d-flex align-items-center${
      this.props.isVertical ? ' btn-block rounded-0' : ''
    }`;

    return (
      <ButtonGroup className={groupClass}>
        <Button
          color="primary"
          outline
          size={btnSize}
          className={btnClass}
          href="https://github.com/mnvmn/resume"
          target="_blank"
        >
          <FontAwesome.FaCodeFork />
          &nbsp;&nbsp;<Str msg={msgs.btns.viewSource} />
        </Button>
        {this.props.isVertical && (
          <Link to="/poster" className={`btn btn-${btnSize} btn-outline-primary ${btnClass}`}>
            <FontAwesome.FaMobile />
            &nbsp;&nbsp;<Str msg={msgs.btns.viewContact} />
          </Link>
        )}
        <Button
          color="primary"
          outline
          size={btnSize}
          className={btnClass}
          href="https://github.com/mnvmn/mnvmn.github.io/raw/master/CV_MN.pdf"
          target="_blank"
        >
          <FontAwesome.FaDownload />
          &nbsp;&nbsp;<Str msg={msgs.btns.downloadPdf} />
        </Button>
        <Button
          color="primary"
          outline
          size={btnSize}
          className={btnClass}
          onClick={this.props.toggleOrder}
        >
          <span className="">
            {isAsc ? <FontAwesome.FaSortAmountDesc /> : <FontAwesome.FaSortAmountAsc />}
          </span>
          &nbsp;&nbsp;{' '}
          {isAsc ? <Str msg={msgs.btns.orderByDateDesc} /> : <Str msg={msgs.btns.orderByDateAsc} />}
        </Button>
        <Button
          color="primary"
          outline
          size={btnSize}
          className={btnClass}
          onClick={this.props.toggleLang}
        >
          <FontAwesome.FaLanguage />
          &nbsp;&nbsp;<Str msg={msgs.btns.changeLanguage} />
        </Button>
      </ButtonGroup>
    );
  }
}

Controls.propTypes = {
  isAsc: PropTypes.bool.isRequired,
  isVertical: PropTypes.bool.isRequired,
  toggleLang: PropTypes.func.isRequired,
  toggleOrder: PropTypes.func.isRequired,
};

export default connect(reducer, dispatcher)(Controls);
