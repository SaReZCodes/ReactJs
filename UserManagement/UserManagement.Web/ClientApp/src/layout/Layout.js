import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppContent from '../components/layout/AppContent';
import AppFooter from '../components/layout/AppFooter';
import AppHeader from '../components/layout/AppHeader';
import * as userService from '../services/authService';
class Layout extends Component {
  static displayName = Layout.name;
  state = {
    user: userService.getCurrentUser()
  }

  render() {
    return (
      <div>
        <AppHeader user={this.state.user} />
        <AppContent />
        <AppFooter />
      </div >
    );
  }
}

export default Layout;
