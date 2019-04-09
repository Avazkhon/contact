import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetUser from './xhr/getUser'

// Component
function Card(props) {
  // test arr
  let arr = [
    {name: "Anna Conroy"}, 
    {name3: "name3", name4: 'name4'},
  ];

  return (
    <div className="card  col col-sm-5  col-md-4  col-lg-3  col-xl-2 " >
      <img className="card-img-top" alt={props.user.avatar} src={props.user.avatar} />
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.user.id}</li>
        <li className="list-group-item">{props.user.phone}</li>
      </ul>
      <div className="card-body">
        <a className="card-link" href={props.user.website} >{props.user.website}</a>
      </div>
    </div>
  )
}


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
      }]
    }

  	this.hundleGetUser = this.hundleGetUser.bind(this);
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
      this.setState( {arrayUsers: arr});
    });
  }

  render(){
  	return (
  	  <div className="app text-center ">
        <h1 className="text-center" >Contact</h1>
        <button type="button" className="btn btn-success" onClick={this.hundleGetUser} >Список контактов</button>
        <div className="text-center carUsers" >
          <div className="cardArray">
            {this.state.arrayUsers.map((user, index)=>{
              return (
                <Card user={user} key={index+user.name} />
              )
            })}
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