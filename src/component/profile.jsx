import React from 'react';

function TextP(props) {
  return(

    <div className="col-md-6">
        <p>{props.text}</p>
    </div>
  )
}


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
      <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={this.state.user.avatar} alt={this.state.user.name} />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="prin" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                      {this.state.user.name}
                                    </h5>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">line</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="button" className="profile-print-btn" value="Print Profile" onClick={window.print}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="#">List Link</a><br/>
                            <p>text</p>
                            <a href="#">Value Text</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                <div className="col-md-6">
                                        <label>User name</label>
                                    </div>
                                    <TextP text={this.state.user.name} />
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <TextP text={this.state.user.id} />
                                    <div className="col-md-6">
                                        <label>User phone</label>
                                    </div>
                                    <TextP text={this.state.user.phone} />
                                    <div className="col-md-6">
                                        <label>User email</label>
                                    </div>
                                    <TextP text={this.state.user.email} />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <div className="row">
                                  <div className="col-md-6">
                                      <label>Experience</label>
                                  </div>
                              </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
  }
}

export default Profile