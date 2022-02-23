import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ref } from '../config/constants';
import Router from 'next/router';
import { editUser } from '../helpers/global.function';

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

const mapDispatchToProps = {};

class EditContainer extends Component {
  constructor() {
    super();
    this.updateUsername = this.updateUsername.bind(this);
  }
  state = {
    username: "",
    email: "",
    score: "",
  };

  componentDidMount() {
    this.getDataUser();
  }

  setDataUser = async (user) => {
    this.setState({
      username: user.username,
      email: user.email,
      score: user.score,
    });
  };

  getDataUser = () => {
    ref
      .child(`users/${this.props.authUser.payload.uid}/info`)
      .once("value")
      .then((snapshot) => {
        this.setDataUser(snapshot.val());
      });
  };

  updateUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updateScore = (event) => {
    this.setState({
      score: event.target.value,
    });
  };

  handleSubmit = (e) => {
    const { history } = this.props;

    e.preventDefault();

    editUser(this.state.username, this.props.authUser.payload.uid).catch(
      (error) => {
        this.setState(setErrorMsg("Invalid username/password."));
      }
    );
    Router.push("/users");
  };

  render() {
    return (
          <div className="col-sm-6 col-sm-offset-3 mt-5">
            <h1 className="text-center">Edit User</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  Username
                </label>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    value={this.state.username}
                    onChange={this.updateUsername}
                  />
                
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.updateEmail}
                    readOnly
                  />
                
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Score
                </label>
                  <input
                    className="form-control"
                    type="text"
                    id="text"
                    value={this.state.score}
                    onChange={this.updateScore}
                    readOnly
                  />
                
              </div>
              <button type="submit" className="btn btn-primary">
                Edit Data
              </button>
            </form>
          </div>
    );
  }
}

export default connect(mapStateToProps)(EditContainer);
