import React from 'react';

import Table from './table/Table'
import TableHistory from './table/TableHistory'

class  Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      tableId: "main" 
    }

    this.getTable = this.getTable.bind(this);
  }

  handleTable(props) {
    this.setState({tableId: props})
  }

  getTable() {
    let user = this.state.user;
    // show dafault the className homeBtn
    switch(this.state.tableId){
      case "company":
        return <div>{user.company.name}</div>;
        break
      case "adress":
        return <div>adress</div>;
        break
      case "histrory":
        return <TableHistory history={user.accountHistory}/>;
        break
      default:
      return <Table user={user}/>
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

                                    {/*add className active if active the future*/}
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.handleTable.bind(this, "main")}>main</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.handleTable.bind(this, "histrory")}>histrory</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.handleTable.bind(this, "adress")}>adress</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.handleTable.bind(this, "company")}>company</button>
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

                            {this.getTable()}
                            
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
  }
}

export default Profile