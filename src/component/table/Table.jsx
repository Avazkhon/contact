import React from 'react';

import TextP from './TextP'

function Table(props) {
  return (
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
      <div className="col-md-6">
        <label>Name</label>
      </div>
      <TextP name="name" text={props.user.name} hundleChange={props.hundleChangeTableMain}/>
      <div className="col-md-6">
        <label>Id</label>
      </div>
      <div className="col-md-6">
        <p name="id" >{props.user.id}</p>
      </div>
      <div className="col-md-6">
        <label>Phone</label>
      </div>
      <TextP name="phone" text={props.user.phone} hundleChange={props.hundleChangeTableMain} />
      <div className="col-md-6">
        <label>Email</label>
      </div>
      <TextP name="email" text={props.user.email} hundleChange={props.hundleChangeTableMain} />
    </div>
  </div>
  )
}

export default Table