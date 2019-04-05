import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetUser from './xhr/getUser'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    	arrayUsers: []
    }

  	this.hundleGetUser = this.hundleGetUser.bind(this);

  }

  hundleGetUser () {
  	GetUser((users)=>{
      this.setState( {arrayUsers: users}, ()=>{
    	for(let i = 0 ; i < this.state.arrayUsers.length; i++ ) {
      	  console.log(this.state.arrayUsers[i].avatar)
        }
      })
    });
  }

  render(){
  	return (
  	  <div className="app text-center ">
        <h1 className="text-center" >Contact</h1>
        <button type="button" className="btn btn-success" onClick={this.hundleGetUser} >Список контактов</button>
        <div className="text-center" >
        
  	    </div>
      </div>
  	) 
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)