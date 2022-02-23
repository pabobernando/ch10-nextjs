import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  dataUser: state.dataUser,
});

const mapDispatchToProps = {
  // Get Detail User
  getDetailUser: (...params) => (dispatch) => {
    // console.log("params email", Object.keys(params));

    dispatch({
      type: "GET_DETAIL",
      payload: {
        email: params[0].email,
        username: params[0].username,
        score: params[0].score,
      },
    });
    Router.push(`/users/${params[0].username}`);
  },
};

class ListUserContainer extends Component {
  componentDidMount() {}

  render() {
    let number = 1;
    const { dataUser } = this.props;
    return (
      <div className="main-screen-content-table" style={{width:'60%',margin:'auto'}}>
        <h2 className="table-dark" style={{marginTop:'5px', textAlign:'center'}}>List User</h2>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataUser.payload
              && dataUser.payload.map((user, index) => (
                <tr key={index}>
                  <td>{number++}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => this.props.getDetailUser({
                        email: user.email,
                        username: user.username,
                        score: user.score,
                      })}
                      type="button"
                      className="btn btn-success"
                    >
                      View Users
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUserContainer);
