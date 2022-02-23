import React, { Component } from "react";
import { connect } from "react-redux";
import {
  login,
  resetPassword,
  currentUserUid,
} from "../helpers/global.function.js";

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

function setErrorMsg(error) {
  return {
    loginMessage: error,
  };
}
export class LoginContainer extends Component {
  state = {
    loginMessage: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
      .then(() => {
        this.props.dispatch({
          type: "AUTH_LOGIN",
          payload: {
            uid: currentUserUid(),
            email: this.email.value,
          },
        });
      })
      .catch((error) => {
        this.setState(setErrorMsg("Invalid username/password."));
      });
  };
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    const { authUser } = this.props;
    // console.log("authuser drlogiin page", this.props);
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1 className="text-dark"> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              ref={(email) => (this.email = email)}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={(pw) => (this.pw = pw)}
            />
          </div>
          {this.state.loginMessage && (
            <div className="alert alert-danger" role="alert">
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage}{" "}
              <a href="#" onClick={this.resetPassword} className="alert-link">
                Forgot Password?
              </a>
            </div>
          )}
          <div className="text-center">
          <button id="login" type="submit" className="btn btn-primary">
            Login
          </button>
          </div>
          
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginContainer);
