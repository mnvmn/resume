import React from 'react';
import {Col, Row, ButtonGroup, Button} from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'
import msgs from './../translations.json';
import Str from './Str.js';

class Controls extends React.Component {

  render() {
    const lang = this.props.lang
    const isAsc = this.props.isAsc
    const isVertical = this.props.isVertical

    return (<Row>
      <Col className="d-flex justify-content-end">
        <ButtonGroup color="primary" className={isVertical
            ? "btn-group-vertical"
            : ''}>
          <Button color="primary" outline={true} size="xs" className="d-flex align-items-center" href="https://github.com/mnvmn/resume" target="_blank">
            <FontAwesome.FaCodeFork/>
            &nbsp;&nbsp;<Str msg={msgs.btns.viewSource} lang={lang}/>
          </Button>
          <Button color="primary"outline={true} size="xs" className="d-flex align-items-center" href="https://github.com/mnvmn/mnvmn.github.io/raw/master/CV_MN.pdf" target="_blank">
            <FontAwesome.FaDownload/>
            &nbsp;&nbsp;<Str msg={msgs.btns.downloadPdf} lang={lang}/>
          </Button>
          <Button color="primary" outline={true} size="xs" className="d-flex align-items-center" onClick={this.props.changeOrder}>
            <span className="">
              {
                isAsc
                  ? <FontAwesome.FaSortAmountDesc/>
                  : <FontAwesome.FaSortAmountAsc/>
              }
            </span>
            &nbsp;&nbsp; {
              isAsc
                ? <Str msg={msgs.btns.orderByDateDesc} lang={lang}/>
                : <Str msg={msgs.btns.orderByDateAsc} lang={lang}/>
            }
          </Button>
          <Button color="primary" outline={true} size="xs" className="bt-xs-block d-flex align-items-center" onClick={this.props.changeLang}>
            <FontAwesome.FaLanguage/>
            &nbsp;&nbsp;<Str msg={msgs.btns.changeLanguage} lang={lang}/>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>)
  }
}

export default Controls;
