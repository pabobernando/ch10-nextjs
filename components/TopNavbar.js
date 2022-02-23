/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable import/order */
/* eslint-disable quotes */
/* eslintprefer-const */
import React, { Component } from 'react';
import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import Router from "next/router";
import styles from '../styles/TopNavbar.module.css';
import { firebaseAuth } from '../config/constants';
import { getAll } from "../helpers/global.function";

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  data_user: state.dataUser,
});

const mapDispatchToProps = () => (dispatch) => ({
  // dispatch action auth_logout + sign out firebase
  auth_logout: async function logout() {
    Router.push('/');
    firebaseAuth().signOut();
    setTimeout(() => {
      dispatch({ type: 'AUTH_LOGOUT' });
      dispatch({ type: 'CLEAR_DATA' });
    }, 200);
  },

  cek_user: () => {
    dispatch({
      type: 'INIT',
    });
  },

  // action get data user
  get_data_user: () => {
    getAll().on("value", (snapshot) => {
      let users = [];
      snapshot.forEach((item) => {
        let data = item.val().info;
        let key = item.key;
        users.push({
          key: key,
          uid: data.uid,
          username: data.username,
          email: data.email,
          score: data.score,
        });
      });

      dispatch({
        type: 'GET_DATA',
        payload: users,
      });
    });
  },
  profile: () => Router.push('/users/profile'),
});

export class TopNavbar extends Component {
  constructor(props){
    super(props)
    this.authUser =this.props
  }
  componentDidMount() {
    // Cek User
    if (this.props.authUser.isAuthenticated) {
      this.props.authUser;
    } else {
      Router.push('/');
      this.props.cek_user;
    }
  }
  
  render() {
    const { authUser } = this.props;
    return this.authUser.loading === false ? (
      <h1>Loading</h1>
    ) : (
      <navbar className="navbar_custom">
        <ul>
          <li className="" style={{ float: 'left' }}>
            {!authUser.isAuthenticated && (
              <Link href="/">
                <a>Home</a>
              </Link>
            )}
          </li>
          <li>
            {authUser.isAuthenticated && (
              <Link href="/users/">
                <a>DashBoard</a>
              </Link>
            )}
          </li>
          <li>
            {authUser.isAuthenticated && (
              <button
                className="btn_logout"
                onClick={() => this.props.profile()}
              >
                MY PROFILE
              </button>
            )}
          </li>
          <li>
            {authUser.isAuthenticated && (
              <Link href="/users/list">
                <button
                  type="button"
                  className="btn_logout"
                  onClick={() => this.props.get_data_user()}
                >
                  User List
                </button>
              </Link>
            )}
          </li>
          <li>
            {authUser.isAuthenticated && (
              <Link href="/game">
                <a>Game List</a>
              </Link>
            )}
          </li>
          <li>
            {!authUser.isAuthenticated && (
              <Link href="/login">
                <a>Login</a>
              </Link>
            )}
          </li>
          <li>
            {!authUser.isAuthenticated && (
              <Link href="/register">
                <a>Register</a>
              </Link>
            )}
            {authUser.isAuthenticated && (
              <button
                className="btn_logout"
                onClick={this.props.auth_logout}
              >
                Log Out
              </button>
            )}
          </li>
        </ul>
      </navbar>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
