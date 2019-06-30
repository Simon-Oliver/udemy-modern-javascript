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
    </div>
  );
}

export default Bar;
