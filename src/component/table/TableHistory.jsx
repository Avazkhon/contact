import React from 'react';

import TextP from './TextP'

function TableHistory(props) {
  let content = props.history.map((item, i)=>{

  return (
  <tbody key={item.amount} >
    <tr>
      <th scope="row">{i+1}</th>
      <td><TextP name="account" addClass={i+1} text={item.account} hundleChange={props.hundleChange} /></td>
      <td><TextP name="amount" addClass={i+1} text={item.amount} hundleChange={props.hundleChange} /></td>
      <td><TextP name="date" addClass={i+1} text={item.date} hundleChange={props.hundleChange} /></td>
      <td><TextP name="name" addClass={i+1} text={item.name} hundleChange={props.hundleChange} /></td>
      <td><TextP name="type" addClass={i+1} text={item.type} hundleChange={props.hundleChange} /></td>
    </tr>
  </tbody>
    )
  })

  return (
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
      <div className="col-md-6">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">account</th>
              <th scope="col">amount</th>
              <th scope="col">date</th>
              <th scope="col">name</th>
              <th scope="col">type</th>
            </tr>
          </thead>
           {content}
        </table>
      </div>
    </div>
  </div>
  )
}

export default TableHistory