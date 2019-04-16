import React, {Component} from 'react';

function textComponent(props) {
  if(props.change.className == props.addClass && props.change.title == props.name) {
    return (
      <input type="text" className={`${props.addClass} TextP text-center`} name={props.name} onChange={props.hundleChange} defaultValue={props.text} />
    )
  }

  else {
  	return(
      <div className="col-md-6">
        <p className={`${props.addClass} TextP text-center`} title={props.name} onClick={props.hundleGetInputHistory}>{props.text}</p>
      </div>
    )
  }
}

export default textComponent