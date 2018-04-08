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
    //   this.setState({data: resp, isLoading: false})

    // .then(function(resp) {
    //   console.log(resp)
    //   this.setState({data: resp, isLoading: false})
    // })
    // fetch(url).then(response => response.json())
    // .then(response => response.json()).then(data => this.setState({hits: data.hits}));
  }

  render() {
    return (<div className="cv-container">

      <Container>
        <Controls/>

        <h3 className="text-center font-weight-bold mb-5">CV</h3>

        <InfoTable data=""/>
        <InfoTable data="" title="EDUCATION"/>
        <InfoTable data="" title="WORK EXPERIENCE"/>
      </Container>

    </div>)
  }
}

export default Cv;
