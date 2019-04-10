import React from 'react';

import Table from './table/Table'

class  Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      tableId: "home" 
    }
  }

  handleTable(props) {
    console.log(props)
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

                                    {/*add className active if active the future*/}
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.handleTable.bind(this, "homeBtn")}>Светлый</button>
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

                            {/*show dafault the className homeBtn*/}
                            <Table user={this.state.user}/>

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