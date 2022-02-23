/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import TopNavbar from './TopNavbar';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <TopNavbar />
        {children}
      </div>
    );
  }
}
export default (Layout);
