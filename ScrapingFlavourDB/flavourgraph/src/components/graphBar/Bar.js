import React from 'react';
import './Bar.css';

function Bar(props) {
  return (
    <div className="barContainer">
      <div className="label">{props.name}</div>
      <div
        className={`bar${props.index} bar`}
        style={{ height: '50px', width: `${props.data}px` }}
      />
      <div>{props.data}</div>
    </div>
  );
}

export default Bar;
