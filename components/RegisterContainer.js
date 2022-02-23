/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth, currentUserUid } from '../helpers/global.function';

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

function setErrorMsg(error) {
  return {
    registerMessage: error,
  };
}
class RegisterContainer extends Component {
  constructor() {
    super();
    this.state = {
      registerMessage: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    auth(this.email.value, this.pw.value, this.username.value)
      .then(() =>
        this.props.dispatch({
          type: "AUTH_LOGIN",
          payload: {
            uid : currentUserUid(),
            email: this.email.value,
          },
        })


      )
      .catch((error) => {
        this.setState(setErrorMsg("Invalid username/password."));
      });
  };

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3" style={{margin:'50px auto'}}>
        <h1 className="text-light text-center"> Register </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="username">
              Username
              </label>
              <input
                className="form-control"
                ref={(username) => (this.username = username)}
                placeholder="Username"
              />
          </div>
          <div className="form-group">
            <label >
              Email
              </label>
              <input
                className="form-control"
                ref={(email) => (this.email = email)}
                placeholder="Email"
              />
          </div>
          <div className="form-group">
            <label>
              Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={(pw) => (this.pw = pw)}
              />
          </div>
          <div className='text-center'>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RegisterContainer);
