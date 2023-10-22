import React from "react";
import Congratulations from "../assets/congratulation.png";

function Modal({ setOpenModal }) {
	return (
		<section
			onClick={() => {
				setOpenModal(false);
			}}
			className='modal_background'
		>
			<div className='centered'>
				<div className='modal flex flex-col gap-4 px-16 py-8 '>
					<img className='object-contain max-h-[250px]' src={Congratulations} alt='Congratulations' />
					<p className='text-center text-2xl'>Congratulations</p>
					<p className='text-center text-2xl'>
						You have successfully Registered!
					</p>
					<p className='text-center'>
						Yes, it was easy and you did it! <br /> check your mail box for next
						step
					</p>
					<button
						onClick={() => setOpenModal(false)}
						className='w-full rounded p-3 outline-none text-white bg-gradient-to-r from-purple-600 via-purple-400 to-pink-400 h-3.3rem'
					>
						Back
					</button>
				</div>
			</div>
		</section>
	);
}

export default Modal;
