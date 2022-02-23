/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  dataUser: state.dataUser,
  gameRPS: state.gameRPS,
  getDetail: state.getDetail,
});

class DetailUserContainer extends Component {
  componentDidMount() {
  }

  render() {
    const { dataUser } = this.props;
    return (
      <div>
        <DetailUser
          score={dataUser.get_user.score}
          username={dataUser.get_user.username}
          email={dataUser.get_user.email}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps)(DetailUserContainer);

const DetailUser = ({ username, email, score }) => (
  <div>
    <div className="row py-5 px-4">
      <div className="col-md-5 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover">
            <div className="media align-items-end profile-head">
              <div className="profile mr-3">
                <img
                  src="https://placeimg.com/75/75/any"
                  alt="..."
                  width="130"
                  className="rounded mb-2 img-thumbnail"
                />
              </div>
              <div className="media-body mb-5 text-white">
                <i className="fas fa-map-marker-alt mr-2" />
                <strong>{username}</strong>
                <i className="fas fa-map-marker-alt mr-2" />
                { email }
                <p className="small mb-4" />
              </div>
            </div>
          </div>
          <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0">
              <i className="fas fa-map-marker-alt mr-2" />
            </ul>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">Status</h5>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">Online now</p>
            </div>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">Game Rock Paper Scissor</h5>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">
                Skor game :
                {' '}
                { score}
              </p>
            </div>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">Game Congklak</h5>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">
                Skor game :
                {' '}
                {Math.floor(Math.random() * 50 + 1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DetailUser.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
