import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
  	return (
  	  <div className="app text-center ">
        <h1 className="text-center" >Contact</h1>
      </div>
  	) 
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)