import React from 'react';
import '../../css/spinner.css';
import FontAwesome from 'react-fontawesome';

const Spinner = ({ ...props }) => {
  return <span className={props.className}>
    <FontAwesome
      name={props.name}
      size={props.size}
      spin
      style={props.style}
    /></span>
}

export default Spinner