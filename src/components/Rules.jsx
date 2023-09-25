import React from 'react'
import rulesImage from "../assets/Rules.png";
function Rules() {
  return (
    <section className='grid grid-cols-1  md:grid md:grid-cols-2 py-4  gap-4 mx-auto container justify-between items-center'>
				<img
					className='object-contain md:hidden'
					src={rulesImage}
					alt='rules image'
				/>
				<div className='flex flex-col gap-4'>
					<p className='text-3xl font-bold leading-10 text-center md:text-left'>
						Rules and <br />
						<span className='text-primary-color'>Guidelines</span>
					</p>
					<p className='leading-7 text-center md:text-left'>
						Our tech hackathon is a melting pot of visionaries, and its purpose
						is as clear as day: to shape the future. Whether you're a coding
						genius, a design maverick, or a concept wizard, you'll have the
						chance to transform your ideas into reality. Solving real-world
						problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!
					</p>
				</div>
				<div className='hidden md:block'>
					<img className='object-contain' src={rulesImage} alt='rules image' />
				</div>
			</section>
  )
}

export default Rules