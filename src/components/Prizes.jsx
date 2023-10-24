import React from "react";
import trophyImage from "../assets/trophy.png";
import RewardImage from "../assets/Rewards.png"

function Prizes() {
	return (
		<section className='py-16 grid grid-cols-1  md:grid md:grid-cols-2  gap-4 mx-auto container items-center'>
			<div className='text-center md:text-left md:hidden'>
				<h3 className='text-2xl font-bold'>
					Prizes and <br />
					<span className='text-primary-color'>Rewards</span>
				</h3>
				<p className='leading-7 text-center md:text-left'>
					Highlight of the prizes or rewards for winners and for participants.
				</p>
			</div>
			<img className='' src={trophyImage} alt='trophyImage' />
            <div className="grid grid-cols-1 gap-4">
            <header className='hidden md:text-left md:block'>
				<h3 className='text-2xl font-bold'>
					Prizes and <br />
					<span className='text-primary-color'>Rewards</span>
				</h3>
				<p className='leading-7 text-center md:text-left'>
					Highlight of the prizes or rewards for winners and for participants.
				</p>
			</header>
			<img className="mt-0 md:mt-4" src={RewardImage} alt="RewardImage" />
            </div>
		</section>
	);
}

export default Prizes;
