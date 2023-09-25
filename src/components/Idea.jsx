import React from "react";
import ideaImage from "../assets/ideaImage.svg";

function Idea() {
	return (
		<section className='grid grid-cols-1  md:grid md:grid-cols-2 py-4  gap-4 mx-auto container justify-between items-center'>
			<div className=''>
				<img className='object-contain' src={ideaImage} alt='ideaImage' />
			</div>
			<div className='flex flex-col gap-4 mt-4'>
				<p className='font-bold text-xl text-center md:text-left'>
					Introduction to getlinked
					<span className='text-primary-color '>techHackathon 1.0</span>
				</p>
				<p className='leading-7 text-center md:text-left'>
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you're a coding genius,
					a design maverick, or a concept wizard, you'll have the chance to
					transform your ideas into reality. Solving real-world problems,
					pushing the boundaries of technology, and creating solutions that can
					change the world, that's what we're all about!
				</p>
			</div>
		</section>
	);
}

export default Idea;
