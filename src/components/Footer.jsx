import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { PiPhoneCallLight, PiCopyright } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import Line from "../assets/verticalLine.svg";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<>
			<section className='grid grid-cols-1 md:grid-cols-3 py-16 gap-8 mx-auto container items-center'>
				<div className='flex flex-col gap-4'>
					<h3 className='font-bold text-3xl'>
						get<span className='text-primary-color'>linked</span>
					</h3>
					<p className='leading-8'>
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>
					<div className='flex gap-4 items-center text-base'>
						<p>Terms of Use</p>
						<img className='' src={Line} alt='Line' />
						<p>Privacy Policy</p>
					</div>
				</div>

				<div className='flex flex-col gap-4'>
					<p className='text-primary-color font-semibold'>Useful Links</p>
					<p>Overview</p>
					<p>Timeline</p>
					<p>FAQs</p>
					<p>Register</p>
					<div className='flex gap-4 text-white items-center'>
						<p className='text-primary-color font-bold'>Follow us</p>
						<AiOutlineInstagram size={24} />
						<FaXTwitter size={24} />
						<BiLogoFacebook size={24} />
						<FaLinkedinIn size={24} />
					</div>
				</div>

				<div className='flex flex-col gap-4'>
					<Link to={"/contact"}>
						<p className='text-primary-color font-semibold'>Contact Us</p>
					</Link>
					<div className='flex gap-4 items-center'>
						<PiPhoneCallLight size={24} />
						<p>+234 8138109620</p>
					</div>
					<div className='flex gap-4 items-center'>
						<MdLocationOn size={24} />
						<p>
							27,Alara Street <br /> Yaba 100012 <br /> Lagos State
						</p>
					</div>
				</div>

				<p className='flex gap-1 md:hidden mx-auto'>
					All rights reserved.
					<PiCopyright size={15} />
					Oladapo Timilehin
				</p>
			</section>
			<p className='gap-1 hidden md:flex justify-center'>
				All rights reserved.
				<PiCopyright size={15} />
				Oladapo Timilehin
			</p>
		</>
	);
}

export default Footer;
