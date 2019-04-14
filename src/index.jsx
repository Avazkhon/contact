import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import './css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetUser from './xhr/getUser';
import Card from './component/Card';
import Profile from './component/Profile';
import GetStart from './component/imgComponent/getStar';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    	arrayUsers: [{
        username: null,
          email: null,
          avatar: null,
          id: null,
          phone: null,
          website: null,
          company: {
            bs: null,
            catchPhrase: null,
            name: null
          }
      }],
      profile: null,
      select: false,
      search: ""
    }

  	this.hundleGetUser = this.hundleGetUser.bind(this);
    this.hundleGetCarts = this.hundleGetCarts.bind(this);
    this.hundleCartSort = this.hundleCartSort.bind(this);
    this.hundleCartSelect = this.hundleCartSelect.bind(this);
    this.hudleSearch = this.hudleSearch.bind(this);
  }


  hundleGetUser () {
    let arrContacts = JSON.parse((localStorage.getItem('arrContacts')));
    if(arrContacts) {
      this.setState( {arrayUsers: arrContacts, profile: null});
      return
    }

  	GetUser((users)=>{
      let arr = users.map((user)=>{
        return {
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          id: user.id,
          phone: user.phone,
          website: user.website,
          select: false,
          company: {
            bs: user.company.bs,
            catchPhrase: user.company.catchPhrase,
            name: user.company.name
          },
          accountHistory: user.accountHistory,
          address: {
            city: user.address,
            country: user.address,
            geo: {lat: user.address.geo.lat , lng: user.address.geo.lat},
            state: user.address.state,
            streetA: user.address.streetA,
            streetB: user.address.streetB,
            streetC: user.address.streetC,
            streetD: user.address.streetD,
            zipcode: user.address.zipcode
          },
          posts: user.posts
        }
      })
      this.setState( {arrayUsers: arr, profile: null});
      localStorage.setItem('arrContacts', JSON.stringify(arr))
    });
  }


  hundleGetProfile(user) {
    this.setState({profile: user });
  }


  hundleGetCarts() {
    return(
      this.state.arrayUsers.map((user, index)=>{
        return (
          <Card user={user} key={index+user.name} onProfile={this.hundleGetProfile.bind(this, user)} />
        )
      })
    )
  }

  hundleCartSort() {
    let sortArr = this.state.arrayUsers.sort((a, b)=>{
        let nameA = a.name,
          nameB = b.name;
          if(nameA < nameB) return -1
          if(nameA > nameB) return 1
            return 0
    })
    this.setState({arrayUsers: sortArr})
  }


  hundleCartSelect() {
    if(this.state.select) {
      this.hundleGetUser()
      this.setState({select: !this.state.select})
    }

    else {
      let newArray = [];
      this.state.arrayUsers.map((user)=>{
        if(user.select){
          newArray.push(user)
        }
      })
      this.setState({arrayUsers: newArray, select: !this.state.select})
    }
  }


  hudleSearch(e) {
    let text = e.target.value;
    this.setState({search: text})
    search(text, (users)=>{
      this.setState({arrayUsers: users})
    })
     // select a separate component
    function search (text, colback) {
      let arrContacts = JSON.parse((localStorage.getItem('arrContacts')));
      let newArr  = [];
      arrContacts.map((user)=>{

          for( let key in user ) {
            const textSearch = String(user[key]);
            //  search input = textSearch in arrContacts
            if(text.toLowerCase() === textSearch.toLowerCase()) {

              newArr.push(user);
            }
          }
      });

      colback(newArr)
    }
  }


  render(){
  	return (
  	  <div className="app text-center ">
        <header>
          <h1 className="text-center" >Contact</h1>
          <div className="row">
            <div className="col col-md-3">
              <button type="button" className="btn btn-success" onClick={this.hundleGetUser} >list contact</button>
            </div>
            <div className="col col-md-1">
              <button type="button" className="btn btn-light" onClick={this.hundleCartSort} >A-z</button>
            </div>
            <div className="col col-md-1">
              <button type="button" className="btn btn-light" onClick={this.hundleCartSelect} >
                <GetStart boolean={this.state.select}/>
              </button>
            </div>
            <div className="col col-md-6">
              <div className="row">
                <div className="col col-md-3">
                  <input type="search" placeholder="Text" onChange={this.hudleSearch} value={this.state.search} />
                </div>
                <div className="col col-md-5">
                 <input type="button" value="Search" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="text-center carUsers" >
          <div className="cards">
          {/*show arr cart users || show Profile user*/}
          {this.state.profile === null ? this.hundleGetCarts() : <Profile user={this.state.profile}/> }
          </div>
  	    </div>
      </div>
  	) 
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)