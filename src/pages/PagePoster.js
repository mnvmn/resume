import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import dispatcher from './../store/dispatchers';
import reducer from './../store/reducers';
import Logo from './../components/Logo';
import TableInfo from './../components/TableInfo';
import ControlFlipPage from './../components/ControlFlipPage';

class PagePoster extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div id="pageLogo" className="page">
        <Logo />

        <Link to="/">
          <ControlFlipPage orientation="left" />
        </Link>

        <Container style={{ marginTop: '60px' }}>
          <h3 className="text-center text-dark mt-2 mb-4">CONTACT</h3>
          <TableInfo data={data.contact} />
        </Container>
      </div>
    );
  }
}

PagePoster.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.array,
  }).isRequired,
};

export default connect(reducer, dispatcher)(PagePoster);
