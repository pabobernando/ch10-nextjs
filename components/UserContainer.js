/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { authUser } = this.props;
    return (
      <div className="main p-5 mt-5">
        <div className="text-center text-light main-content">
          <h3 className=" mt-5">
            Hello {authUser.payload.email}
          </h3>
          <h1>Welcome To Binar Game</h1>
          <hr />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserContainer);
