import React from 'react';

// Component
function Card(props) {
  return (
     props.user.name === undefined ? null : <div className="card  col col-sm-5  col-md-4  col-lg-3  col-xl-2 " onClick={props.onProfile}>
      <img className="card-img-top" alt={props.user.name} src={props.user.avatar} />
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

export default Card