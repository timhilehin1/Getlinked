import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export const CustomButton = ({ text, handleAction }) => {
	return (
		<button onClick={handleAction} className='actionBtn text-white'>
			{text}
		</button>
	);
};

export const RegisterButton = ({ text, handleAction }) => {
	return (
		<button
			onClick={handleAction}
			className='border border-[#9A39FF] rounded h-[3.3rem] w-[10.3rem]  text-white p-1'
		>
			{text}
		</button>
	);
};

CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	handleAction: PropTypes.func,
};
