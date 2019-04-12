import React, {Component} from 'react';

function TextP(props) {
  return(

    <div className="col-md-6">
        <p><input type="text" className={`${props.addClass} TextP`} name={props.name} defaultValue={props.text} onChange={props.hundleChange} /></p>
    </div>
  )
}

export default TextP