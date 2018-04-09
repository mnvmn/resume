import React from 'react';
import TableInfo from './TableInfo.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';

const REST_URL = '/data.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false,
      isAscending: true
    };

    this.changeOrder = this.changeOrder.bind(this);
  }

  changeOrder() {
    this.setState(prevState => ({
      isAscending: !prevState.isAscending
    }));
  }

  componentDidMount() {

    this.setState({isLoading: true});

    fetch(REST_URL).then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(data => this.setState({data, isLoading: false})).catch(error => this.setState({error, isLoading: false}));
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('CV state', nextState)
  }

  render() {
    const isAsc = this.state.isAscending;
    return (<div className="cv-container">

      <Container>

        <h3 className="text-center font-weight-bold mt-2 mb-4">CV</h3>

        <TableInfo data={this.state.data.info}/>

        <Controls btnHandler={this.changeOrder} isAscending={isAsc}/>

        <TableInfo data={this.state.data.education} isAscending={isAsc} title="EDUCATION"/>
        <TableInfo data={this.state.data.work} isAscending={isAsc} title="WORK EXPERIENCE"/>
      </Container>

    </div>)
  }
}

export default Cv;
