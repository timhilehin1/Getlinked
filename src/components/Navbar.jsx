import { React, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Menu from "../assets/menu.svg";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
	const [open, setOpen] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};
	return (
		<>
			<section className='text-white container mx-auto flex justify-between border items-center px-2'>
				<p className='font-normal text-xl'>
					get<span className='text-primary-color'>linked</span>
				</p>
				<nav className='hidden  md:flex  gap-5 relative'>
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
						<Link to='/'>
							<li className='font-normal'>Contact</li>
						</Link>
						<Link to='/'>
							<Button text={"Register"} />
						</Link>
					</ul>
				</nav>

				{open ? (
					<AiOutlineClose
						onClick={handleToggle}
						className='md:hidden cursor-pointer'
						size={24}
					/>
				) : (
					<button className='md:hidden text-white' onClick={handleToggle}>
						<img
							className='w-[1.1875rem] h-[0.875rem]'
							alt='menu-icon'
							src={Menu}
						/>
					</button>
				)}
			</section>

			<nav
				className={`mobile-menu ${open ? 'active' : ''} py-4 text-white  items-center md:hidden`}
			>
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
					<Link to='/'>
						<li className='font-normal'>Contact</li>
					</Link>
					<Link to='/'>
						<Button text={"Register"} />
					</Link>
				</ul>
			</nav>
            <hr className="border-[--horizontal-line-color]"/>
		</>
	);
}

export default Navbar;
