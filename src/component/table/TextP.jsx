import React, {Component} from 'react';

function TextP(props) {
  return(

    <div>
        <input type="text" className={`${props.addClass} TextP text-center`} name={props.name} defaultValue={props.text} onChange={props.hundleChange} />
    </div>
  )
}

export default TextP