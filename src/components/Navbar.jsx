import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RegisterButton, CustomButton } from "./Button";
import Menu from "../assets/menu.svg";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ isRegister }) {
	const [open, setOpen] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};
	return (
		<>
			<section className='text-white container py-6 md:py-2  mx-auto flex justify-between border pt-2 md:pt-0  items-center px-2'>
				<Link to='/'>
					<p className='font-normal text-xl'>
						get<span className='text-primary-color'>linked</span>
					</p>
				</Link>
				<nav className='hidden  md:flex items-center gap-5 relative'>
					<ul className='flex flex-row gap-6 text-sm grow items-center py-4'>
						<Link to='/'>
							<li className='font-normal'>Timeline</li>
						</Link>
						<Link to='/'>
							<li className='font-normal'>Overview</li>
						</Link>
						<Link to='/'>
							<li className='font-normal'>FAQS</li>
						</Link>
						<NavLink
							className={({ isActive }) => (isActive ? "active" : "")}
							to='/contact'
						>
							<li className='font-normal'>Contact</li>
						</NavLink>
						{isRegister ? (
							<Link to='/register'>
								<RegisterButton text={"Register"} />
							</Link>
						) : (
							<Link to='/register'>
								<CustomButton text={"Register"} />
							</Link>
						)}
					</ul>
				</nav>

				<button className='md:hidden text-white' onClick={handleToggle}>
					<img
						className='w-[1.1875rem] h-[0.875rem]'
						alt='menu-icon'
						src={Menu}
					/>
				</button>
			</section>

			<nav
				className={`mobile-menu ${
					open ? "showNav" : ""
				} py-4 text-white  items-center md:hidden`}
			>
				<AiOutlineClose
					onClick={handleToggle}
					className='md:hidden cursor-pointer float-right'
					size={24}
				/>
				<ul className='flex flex-col gap-4 py-3 px-4'>
					<Link to='/'>
						<li className='font-normal'>Timeline</li>
					</Link>
					<Link to='/'>
						<li className='font-normal'>Overview</li>
					</Link>
					<Link to='/'>
						<li className='font-normal'>FAQS</li>
					</Link>
					<Link to='/contact'>
						<li className='font-normal'>Contact</li>
					</Link>
					<Link to='/register'>
						<CustomButton text={"Register"} />
					</Link>
				</ul>
			</nav>
			<hr className='border-[--horizontal-line-color]' />
		</>
	);
}

export default Navbar;
