import React from 'react';

import TextP from './TextP'

function TableHistory(props) {

  let content = props.history.map((item)=>{
    console.log(item)
    return (
      <table className="table" key={item.amount}>
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
  <tbody>
    <tr>
      <th scope="row">-</th>
      <td><TextP text={item.account} /></td>
      <td><TextP text={item.amount} /></td>
      <td><TextP text={item.date} /></td>
      <td><TextP text={item.name} /></td>
      <td><TextP text={item.type} /></td>
    </tr>
  </tbody>
</table>
    )
  })

  return (
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
      <div className="col-md-6">
        {content}
      </div>
    </div>
  </div>
  )
}

export default TableHistory