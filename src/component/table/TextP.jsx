import React, {Component} from 'react';

function TextP(props) {
  return(

    <div className="col-md-6">
        <input type="text" className={`${props.addClass} TextP text-center`} name={props.name} defaultValue={props.text} onChange={props.hundleChange} />
    </div>
  )
}

export default TextP