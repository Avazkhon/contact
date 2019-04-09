import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetUser from './xhr/getUser';
import Card from './component/Card'
import Profile from './component/Profile'


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
          website: null
      }],
      profile: null
    }

  	this.hundleGetUser = this.hundleGetUser.bind(this);
    this.hundleGetCarts = this.hundleGetCarts.bind(this);
  }

  hundleGetUser () {
  	GetUser((users)=>{
      let arr = users.map((user)=>{
        return {
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          id: user.id,
          phone: user.phone,
          website: user.website
        }
      })
      this.setState( {arrayUsers: arr, profile: null});
    });
  }

  hundleGetProfile(user) {
    this.setState({profile: user });
    console.log(this.state.profile)
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


  render(){
  	return (
  	  <div className="app text-center ">
        <header>
          <h1 className="text-center" >Contact</h1>
          <button type="button" className="btn btn-success" onClick={this.hundleGetUser} >list contact</button>
        </header>
        <div className="text-center carUsers" >
          <Profile user={this.state.arrayUsers[0]}/>
          <div className="cards">
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