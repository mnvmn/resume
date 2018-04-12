import React from 'react';
import {Col, Row, ButtonGroup, Button} from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'
import msgs from './../translations.json';
import Str from './Str.js';

class Controls extends React.Component {

  render() {
    const lang = this.props.language
    const isAscending = this.props.isAscending

    return (<Row>
      <Col className="d-flex justify-content-end">
        <ButtonGroup>
          <Button outline={true} size="xs" className="d-flex align-items-center" href="https://github.com/mnvmn/resume" target="_blank">
            <FontAwesome.FaCodeFork/>
            &nbsp;&nbsp;<Str msg={msgs.btns.viewSource} lang={lang}/>
          </Button>
          <Button outline={true} size="xs" className="d-flex align-items-center" href="https://github.com/mnvmn/mnvmn.github.io/raw/master/CV_MN.pdf" target="_blank">
            <FontAwesome.FaDownload/>
            &nbsp;&nbsp;<Str msg={msgs.btns.downloadPdf} lang={lang}/>
          </Button>
          <Button outline={true} size="xs" className="d-flex align-items-center" onClick={this.props.changeOrder}>
            <span className="">
              {
                isAscending
                  ? <FontAwesome.FaSortAmountDesc/>
                  : <FontAwesome.FaSortAmountAsc/>
              }
            </span>
            &nbsp;&nbsp; {
              isAscending
                ? <Str msg={msgs.btns.orderByDateDesc} lang={lang}/>
                : <Str msg={msgs.btns.orderByDateAsc} lang={lang}/>
            }
          </Button>
          <Button outline={true} size="xs" className="d-flex align-items-center" onClick={this.props.changeLang}>
            <FontAwesome.FaLanguage/>
            &nbsp;&nbsp;<Str msg={msgs.btns.changeLanguage} lang={lang}/>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>)
  }
}

export default Controls;
