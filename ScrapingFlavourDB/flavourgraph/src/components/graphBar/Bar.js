import React from 'react';
import './Bar.css';

function Bar(props) {
  return <div className="bar" style={props.barStyle} />;
}

export default Bar;
