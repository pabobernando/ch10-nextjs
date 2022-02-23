import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  gameRPS: state.gameRPS,
  dataUser: state.dataUser,
});


export class ProfileContainer extends Component {
  constructor(props){
    super(props)
    this.state={
     
    }
  }
  render() {
    const { authUser } = this.props;
    // console.log(authUser);
    return (
      <div className="p-5 mt-5">
        <div className="row py-5 px-4">
          <div className="col-md-5 mx-auto">
            <div className="bg-white shadow rounded overflow-hidden">
             <h2 className="d-inline-block">Profile</h2>
              <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                  <div className="profile mr-3">
                    <img
                      src="https://placeimg.com/75/75/any"
                      alt="..."
                      width="130"
                      className="rounded mb-2 img-thumbnail"
                    />
                    <a className="btn btn-outline-dark btn-sm btn-block">
                      <button
                        style={{ border: "none", background: "transparent" }}
                        type="button"
                        onClick={() => Router.push("/users/edit")}
                      >
                        Edit profile
                      </button>
                    </a>
                  </div>
                  <div className="media-body mb-5 text-white">
                    <i className="fas fa-map-marker-alt mr-2"></i>Email
                    <h4 className="mt-0 mb-0">{authUser.payload.email}</h4>
                    <p className="small mb-4"></p>
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                  <i className="fas fa-map-marker-alt mr-2"></i>Online
                </ul>
              </div>
              <div className="px-4 py-3">
                <h5 className="mb-0">Recent Match</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                  <p className="font-italic mb-0">
                    Last Match : 
                    <strong> 
                      {' '}
                      {this.props.gameRPS.Result}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfileContainer);
