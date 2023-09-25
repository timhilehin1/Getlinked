import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

function Button({text}) {
  return (
    <button className='actionBtn text-white'>{text}</button>
  )
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Button