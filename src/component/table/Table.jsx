import React from 'react';

import TextP from './TextP'

function Table(props) {
  return (
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
      <div className="col-md-6">
        <label>User name</label>
      </div>
      <TextP text={props.user.name} />
      <div className="col-md-6">
        <label>User Id</label>
      </div>
      <TextP text={props.user.id} />
      <div className="col-md-6">
        <label>User phone</label>
      </div>
      <TextP text={props.user.phone} />
      <div className="col-md-6">
        <label>User email</label>
      </div>
      <TextP text={props.user.email} />
    </div>
  </div>
  )
}

export default Table