/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAll } from '../helpers/global.function';

const mapStateToProps = (state) => ({
  dataUser: state.dataUser,
});

class ListGame extends Component {
  constructor() {
    super();
    this.state = {
      showDetailGame: false,
      showDetailGameB: false,
      users: [],
    };
    this.onDataChange = this.onDataChange.bind(this);
  }

  componentDidMount() {
    getAll()
      .orderByChild('info/score')
      .limitToLast(3)
      .on('value', this.onDataChange);
    this.props.dataUser;
  }

  onDataChange(items) {
    let users = [];

    items.forEach((item) => {
      const data = item.val().info;
      const { key } = item;
      users.push({
        key,
        uid: data.uid,
        username: data.email,
        email: data.username,
        score: data.score,
      });
    });

    users = users.sort((a, b) => b.score - a.score);

    this.setState({
      users,
    });
  }

  activeDetailGame() {
    this.setState({
      showDetailGame: true,
      showDetailGameB: false,
    });
  }

  activeDetailGameB() {
    this.setState({
      showDetailGameB: true,
      showDetailGame: false,
    });
  }

  gotoGame() {
    Router.push('/game/rock-paper-scissors');
  }

  warning() {
    alert(
      'Currently repairing the server \nWe apologize for the inconvenience \nPlease try again '
    );
  }

  render() {
    let number = 1;
    const { dataUser } = this.props;
    return (
      <div style={{width:'60%', margin:'50px auto', }}>
      <div className="main-screen-content-table">
        <table className="table table-dark">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Game</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Rock Paper Scissors</td>
              <td>
                <button
                  type="button"
                  onClick={() => this.activeDetailGame()}
                  className="btn btn-success"
                >
                  Detail Game
                </button>
                {' '}
                <button
                  onClick={this.gotoGame}
                  type="button"
                  className="btn btn-primary"
                >
                  Play Game
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Hom Pim Pah</td>
              <td>
                <button
                  type="button"
                  onClick={() => this.activeDetailGameB()}
                  className="btn btn-success"
                >
                  Detail Game
                </button>
                {' '}
                <button
                  onClick={this.warning}
                  type="button"
                  className="btn btn-primary"
                >
                  Play Game
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {this.state.showDetailGame && (
          <div>
            <h3 style={{ color: 'white' }}>
              LeaderBoard Game Rock Paper Scissor
            </h3>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users
                  && this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{number++}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        {this.state.showDetailGameB && (
          <div>
            <h3 style={{ color: 'white' }}>LeaderBoard Game Hom Pim Pah</h3>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {dataUser.payload
                  && dataUser.payload
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 5)
                    .map((user) => (
                      <tr key={user.id}>
                        <td>{number++}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{Math.floor(Math.random() * 50 + 1)}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListGame);
