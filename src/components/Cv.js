import React from 'react';
import InfoTable from './InfoTable.js';
import Controls from './Controls.js';
import {Container} from 'reactstrap';

const url = '/data.json';
// const url = 'http://localhost:3000/data.json';

class Cv extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false
    };
  }

  componentDidMount() {

    this.setState({isLoading: true});

    fetch(url).then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(data => this.setState({data, isLoading: false})).catch(error => this.setState({error, isLoading: false}));
  }

  render() {
    return (<div className="cv-container">

      <Container>
        <Controls/>

        <h3 className="text-center font-weight-bold mb-5">CV</h3>

        <InfoTable data={this.state.data.info}/>
        <InfoTable data={this.state.data.education} title="EDUCATION"/>
        <InfoTable data={this.state.data.work} title="WORK EXPERIENCE"/>
      </Container>

    </div>)
  }
}

export default Cv;
