import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';


class MainLayout extends React.Component {
  render() {
    return (
      <div className='MainLayout'>
        <AppBar>
          <Container maxWidth='lg'>
            <Toolbar disableGutters>
              <PageNav />
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth='lg'>
          <Toolbar />
          {this.props.children}
        </Container>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
