import React from 'react';

import GetStart from './imgComponent/getStar';

function Header (props) {
  return (
    <header>
      <h1 className="text-center" >Contact</h1>
      <div className="row">
        <div className="col-12 col-sm-2">
          <button type="button" className="btn btn-success" onClick={props.handle.handleGetUser} >list contact</button>
        </div>
        <div className="col-6 col-sm-1">
          <button type="button" className="btn btn-light" onClick={props.handle.handleCartSort} >A-z</button>
        </div>
        <div className="col-6 col-sm-1">
          <button type="button" className="btn btn-light" onClick={props.handle.handleCartSelect} >
            <GetStart boolean={props.handle.state.select}/>
          </button>
        </div>
        <div className="col-12 col-sm-2">
          <input type="search" className="form-control" placeholder="Text" onChange={props.handle.handleSearch} value={props.handle.state.search} />
        </div>
      </div>
    </header>
  )
}


export default Header 