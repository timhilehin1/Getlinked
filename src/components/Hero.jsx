import React from "react";
import Button from "./Button";
import Idea from "./Idea";
import Criteria from "./Criteria";
import FAQ from "./FAQ";
import Rules from "./Rules";
import Timeline from "./Timeline";
import Prizes from "./Prizes";
import Partners from "./Partners";
import Privacy from "./Privacy";
import heroImage from "../assets/heroImage.svg";
function Hero() {
	return (
		<>
			<section className='grid grid-cols-1 md:pt-4  md:grid md:grid-cols-2 gap-4 mx-auto container'>
				<div className='flex flex-col   gap-2 text-white self-center leading-loose'>
					<p className='block md:hidden font-bold text-base py-4'>
						Igniting a Revolution in HR Innovation
					</p>
					<p className='font-bold  text-2xl md:text-5xl'>
						getLinked Tech <br />
						Hackathon
						<span className='text-primary-color'>1.0</span>
					</p>
					<p>
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>
					<Button text={"Register"} />
				</div>

				<div className='text-white bg-blend-hard-light'>
					<p className='font-bold text-2xl hidden md:block py-2'>
						Igniting a Revolution in HR Innovation
					</p>
					<img
						className='object-contain border-none outline-none '
						src={heroImage}
						alt='heroImage'
					/>
				</div>
			</section>
			<hr className='border-[--horizontal-line-color]' />
			<Idea />
			<hr className='border-[--horizontal-line-color]' />
			<Rules />
			<hr className='border-[--horizontal-line-color]' />
			<Criteria />
			<hr className='border-[--horizontal-line-color]' />
			<FAQ />
			<hr className='border-[--horizontal-line-color]' />
			<Timeline />
			<hr className='border-[--horizontal-line-color]' />
			<Prizes />
			<hr className='border-[--horizontal-line-color]' />
			<Partners />
			<hr className='border-[--horizontal-line-color]' />
			<Privacy />
		</>
	);
}

export default Hero;
