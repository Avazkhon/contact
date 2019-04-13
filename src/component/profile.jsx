import React from 'react';

import Table from './table/Table';
import TableHistory from './table/TableHistory';
import UpdateLocalStorage from './auxiliaryСomponent/updateLocalStorage'

class  Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      tableId: "main"
    }

    this.getTable = this.getTable.bind(this);
    this.hundleChange = this.hundleChange.bind(this);
    this.hundleChangeTableMain = this.hundleChangeTableMain.bind(this);
  }

  
  hundleTable(props) {
    this.setState({tableId: props})
  }


  // show the specified table
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
      case "accountHistory":
        return <TableHistory history={user.accountHistory} hundleChange={this.hundleChange} />;
        break
      default:
      return <Table user={user} hundleChangeTableMain={this.hundleChangeTableMain} />
    }
  }


  hundleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    let className = e.target.className[0];
    let table = this.state.tableId;
    let user = this.state.user;
    // let arrContacts = JSON.parse((localStorage.getItem('arrContacts')));


    this.setState((optios)=>{

      optios.user[table][className - 1][name] = value;
      UpdateLocalStorage(optios.user);
    })

  }

  hundleChangeTableMain(e) {
    let name = e.target.name;
    let value = e.target.value;
    let user = this.state.user;
    // let arrContacts = JSON.parse((localStorage.getItem('arrContacts')));

    this.setState((item)=>{

      item.user[name] = value;
      UpdateLocalStorage(item.user);
    })
  }


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
                                <input type="file" name="file"/>
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
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.hundleTable.bind(this, "main")}>main</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.hundleTable.bind(this, "accountHistory")}>histrory</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.hundleTable.bind(this, "adress")}>adress</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" id="homeBtn" className="btn btn-light nav-link" onClick={this.hundleTable.bind(this, "company")}>company</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="button" className="profile-print-btn" value="Print Profile" onClick={window.print}/>
                    </div>
                </div>
                <div className="row-4">
                    <div className="col-md-4">
                        <div className="tab-content profile-tab">
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