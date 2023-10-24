import {React, useState} from "react";
import registerBackGround from "../assets/registerBackground.png";
import Navbar from "../components/Navbar";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import Modal from "../components/Modal";

function Register() {
	const [openModal, setOpenModal] = useState(false);
	const InputGroup = () => {
		return (
			<div className='flex flex-col'>
				<label htmlFor='phone'>First Name</label>
				<input
					className='border border-white rounded bg-[#ffffff08] p-2 mt-2 outline-none'
					name='phone'
					id='phone'
					placeholder='Enter your phone number'
					type='tel'
					required
				/>
			</div>
		);
	};

	const SelectGroup = ({ label, options, value, required, name }) => {
		return (
			<div className='flex flex-col'>
				<label htmlFor={name}>{label}</label>
				<select
					id={name}
					required={required}
					className='border border-white rounded bg-[#ffffff08] p-2.5 mt-2 outline-none'
				>
					{options?.map((option) => (
						<option key={option} className='customSelectOption' value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		);
	};
	return (
		<div className='px-6 md:px-0'>
			<Navbar isRegister={true} />
			<section className='py-20  mx-auto container md:grid md:grid-cols-2 items-center'>
				<img className='' src={registerBackGround} alt='registerBackGround' />

				<form className='questions p-8 flex flex-col gap-8'>
					<p className='text-primary-color font-bold text-2xl'>Register</p>
					<div className='flex gap-2 items-baseline'>
						<p>Be part of this movement!</p>
						<div className='flex px-3 items-end border-primary-color border-b-2 border-dashed'>
							<img src={man} alt='man' />
							<img src={woman} alt='woman' />
						</div>
					</div>
					<p className='text-xl'>CREATE YOUR ACCOUNT</p>
					<section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4 outline-none'
							name='teamsName'
							placeholder='Enter the name of your group'
							type='text'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4 outline-none'
							name='phone'
							placeholder='Enter your phone number'
							type='tel'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4 outline-none'
							name='email'
							placeholder='Enter your email address'
							type='email'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4 outline-none'
							name='topic'
							placeholder='What is your group project topic?'
							type='text'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4 outline-none'
							name='teamsName'
							placeholder='Teams Name'
							type='text'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4 outline-none'
							name='teamsName'
							placeholder='Teams Name'
							type='text'
							required
						/>

						{/* <InputGroup /> */}
						<SelectGroup
							label={"Category"}
							name={"category"}
							options={["UI/UX", "WEB", "MOBILE", "WORDPRESS"]}
							required={true}
						/>
						<SelectGroup
							label={"Group Size"}
							name={"size"}
							options={["1-3", "4-7", "10-15", "15-25"]}
							required={true}
						/>
					</section>
					<p className='font-normal italic text-secondary-color'>
						Please review your registration details before submitting
					</p>

					<div className='flex gap-2 items-center'>
						<input className="w-6"  type='checkbox' name='terms' id='terms' required />
						<label htmlFor='terms'>
							I agreed with the event terms and conditions and privacy policy
						</label>
					</div>

                    <button onClick={()=>setOpenModal(true)} className="w-full rounded p-3 outline-none text-white bg-gradient-to-r from-purple-600 via-purple-400 to-pink-400 h-3.3rem">Register Now</button>
					{openModal && <Modal setOpenModal={setOpenModal} />}
				</form>
			</section>
		</div>
	);
}

export default Register;
