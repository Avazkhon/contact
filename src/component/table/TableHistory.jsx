import React from 'react';

import TextComponent from './tableComponents/textComponent'

function TableHistory(props) {
  let content = props.history.map((item, i)=>{
    i = i+1;
  return (
  <tbody key={item.amount} >
    <tr>
      <th scope="row">{i}</th>
      <td><TextComponent
        name="account" addClass={i}
        text={item.account} change={props.change}
        hundleChange={props.hundleChange} hundleGetInputHistory={props.hundleGetInputHistory} /></td>

      <td><TextComponent
        name="amount" addClass={i} text={item.amount}
        change={props.change} hundleChange={props.hundleChange}
        hundleGetInputHistory={props.hundleGetInputHistory} /></td>

      <td><TextComponent
        name="date" addClass={i} text={item.date}
        change={props.change} hundleChange={props.hundleChange}
        hundleGetInputHistory={props.hundleGetInputHistory} /></td>

      <td><TextComponent
        name="name" addClass={i} text={item.name} change={props.change}
        hundleChange={props.hundleChange} hundleGetInputHistory={props.hundleGetInputHistory} /></td>

      <td><TextComponent
        name="type" addClass={i} text={item.type} change={props.change}
        hundleChange={props.hundleChange} hundleGetInputHistory={props.hundleGetInputHistory} /></td>
        
    </tr>
  </tbody>
    )
  })

  return (
  <div className="tab-pane fade show active" id="home" >
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