import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { CustomButton } from "../components/Button";
import Navigator from "../assets/backNavigation.png";
import { Link } from "react-router-dom";

function Contact() {
	const handleSubmt = (e) => {
		e.preventDefault();
	};
	return (
		<div className='px-6 md:px-0'>
			<div className='hidden md:block'>
				<Navbar isRegister={true} />
				<section className='py-20 px-16  mx-auto container md:grid md:grid-cols-2 items-center'>
					<div className='get_in_touch flex flex-col gap-6 text-base text-left'>
						<p className='text-primary-color font-bold text-2xl'>
							Get in touch
						</p>

						<p>
							Contact <br /> Information
						</p>
						<p>
							27, Alara Street
							<br /> Yaba 10012 <br /> Lagos, State
						</p>
						<p>Call Us: 0703328282828</p>
						<p>
							we are open from Monday-Friday
							<br />
							08:00am - 05:00pm
						</p>
						<p className='text-primary-color font-bold'>share on</p>
						<div className='flex gap-4 text-white items-center'>
							<AiOutlineInstagram size={24} />
							<FaXTwitter size={24} />
							<BiLogoFacebook size={24} />
							<FaLinkedinIn size={24} />
						</div>
					</div>

					<div className='questions p-8'>
						<header className='text-primary-color font-bold text-lg'>
							Questions or need assistance?
							<br />
							Let us know about it!
						</header>

						<form className='flex flex-col gap-10'>
							<input
								className='border border-white rounded bg-[#ffffff08] p-2 mt-4'
								name='firstName'
								placeholder='First Name'
								type='text'
								required
							/>

							<input
								className='border border-white rounded bg-[#ffffff08]  p-2'
								name='email'
								type='email'
								placeholder='email'
								required
							/>

							<textarea
								className='border border-white rounded bg-[#ffffff08]  p-2'
								type='text'
								placeholder='message'
							/>
							<div className='mx-auto'>
								<CustomButton handleAction={handleSubmt} text={"Submit"} />
							</div>
						</form>
					</div>
				</section>
			</div>

			<div className='md:hidden'>
				<section className='mx-auto pt-20 container grid grid-cols-1 gap-4 items-center'>
					<Link to={"/"}>
						<img className='navigation' src={Navigator} alt='Navigator' />
					</Link>
					<p className='text-xl text-primary-color font-bold text-left'>
						Questions or need
						<br /> assistance? <br />
						Let us know about it
					</p>
					<p>Email us below to any question related to our event</p>
					<form className='flex flex-col gap-10'>
						<input
							className='border border-white rounded bg-[#ffffff08] p-2 mt-4'
							name='teamsName'
							placeholder='Teams Name'
							type='text'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08]  p-2'
							name='topic'
							type='text'
							placeholder='Topic'
							required
						/>

						<input
							className='border border-white rounded bg-[#ffffff08]  p-2'
							name='email'
							type='email'
							placeholder='email'
							required
						/>

						<textarea
							className='border border-white rounded bg-[#ffffff08]  p-2'
							type='text'
							placeholder='message'
						/>
						<div className='mx-auto'>
							<CustomButton handleAction={handleSubmt} text={"Submit"} />
						</div>
					</form>
					<div className='mb-0 mx-auto mt-8'>
						<p className='text-primary-color font-bold'>share on</p>
						<div className='flex gap-4 text-white items-center'>
							<AiOutlineInstagram size={24} />
							<FaXTwitter size={24} />
							<BiLogoFacebook size={24} />
							<FaLinkedinIn size={24} />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Contact;
