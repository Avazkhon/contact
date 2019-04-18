import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import './css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import GetUser from './xhr/getUser';
import Card from './component/Card';
import Profile from './component/Profile';
// import GetStart from './component/imgComponent/getStar';


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
      search: "",
      cartSort: false,
      message: ""
    }

  	this.handleGetUser = this.handleGetUser.bind(this);
    this.handleGetCarts = this.handleGetCarts.bind(this);
    this.handleCartSort = this.handleCartSort.bind(this);
    this.handleCartSelect = this.handleCartSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }


  handleGetUser () {
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
          accountHistory: user.accountHistory,
          posts: user.posts,
          company: {
            bs: user.company.bs,
            catchPhrase: user.company.catchPhrase,
            name: user.company.name
          },
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
          }
        }
      })

      this.setState( {arrayUsers: arr, profile: null});
      localStorage.setItem('arrContacts', JSON.stringify(arr))
    });
  }


  handleGetProfile(user) {
    this.setState({profile: user });
  }


  handleGetCarts() {
    return(
      this.state.arrayUsers.map((user, index)=>{
        return (
          <Card user={user} key={index+user.name} onProfile={this.handleGetProfile.bind(this, user)} />
        )
      })
    )
  }


  addMessage(text) {

    setTimeout(()=>{
      this.setState({message: ""})
    }, 3000)

    if(text.length >= 1){
      this.setState({message: text})
      return
    }

    if(text.length <= 0){
      this.setState({message: ""})
    }

  }


  handleCartSort() {
    // if not user and profile = null
    if(this.state.arrayUsers[0].id === null || this.state.profile !== null) {
      this.addMessage("Please, click the button 'list contact'");
    }
    // sort A-z
    if(this.state.cartSort) {
      let sortArr = this.state.arrayUsers.sort((a, b)=>{
      let nameA = a.name,
          nameB = b.name;
      if(nameA < nameB) return -1
      if(nameA > nameB) return 1
      return 0
    })

    this.setState({arrayUsers: sortArr, cartSort: !this.state.cartSort })
      return
    }

    // sort z-A
    else {
      let sortArr = this.state.arrayUsers.sort((a, b)=>{
      let nameA = a.name,
          nameB = b.name;
      if(nameA < nameB) return 1
      if(nameA > nameB) return -1
      return 0
    })

    this.setState({arrayUsers: sortArr, cartSort: !this.state.cartSort})
      return
    }

  }


  handleCartSelect() {
    this.handleGetUser();
    if(this.state.select) {
      this.setState({select: !this.state.select})
    }

    else {
      let newArray = [];

      this.state.arrayUsers.map((user)=>{
        if(user.select){
          newArray.push(user)
        }
      })

      if(newArray.length === 0) {
        this.setState({
          arrayUsers: newArray,
          select: !this.state.select})

        this.addMessage("Sorry, you not select user in collection!")
      }

      else {
        this.setState({
          arrayUsers: newArray,
          select: !this.state.select
        })

        this.addMessage()
      }
    }
  }


  handleSearch(e) {
    let text = e.target.value;
    this.setState({search: text})

    search(text, (users)=>{
      this.setState({arrayUsers: users})
    })
     // select a separate component
    function search (text, callback) {
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

      callback(newArr)
    }
  }


  render(){
  	return (
  	  <div className="app text-center row">
        <div className="text-center col-12">
          <Header handle={{

            handleGetUser: this.handleGetUser,
            handleCartSort: this.handleCartSort,
            handleCartSelect: this.handleCartSelect,
            state: this.state,
            handleSearch: this.handleSearch

          }} />
        </div>
        <div className="text-center carUsers col-12" >
          <div className="cards text-center ">
          <div className="text-center col-12" >
            <h3 className="message "> {this.state.message}</h3>
          </div>
          {/*show arr cart users || show Profile user*/}
          {this.state.profile === null ? this.handleGetCarts() : <Profile user={this.state.profile}/> }
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