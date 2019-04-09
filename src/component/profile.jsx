import React from 'react';

class  Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user
    }
  }
  // add content the future
  render() {
    return (
      <div className="profile   col col-sm-5  col-md-6  col-lg-4  col-xl-4">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img className="card-img" src={this.state.user.avatar} alt={this.state.user.username} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{this.state.user.username}</h5>
              <p className="card-text">{this.state.user.id}</p>
              <p className="card-text">{this.state.user.email}</p>
              <p className="card-text">{this.state.user.phone}</p>
              <a href={this.state.user.website}>{this.state.user.website}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile