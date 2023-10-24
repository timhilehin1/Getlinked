import React from "react";
import partnersImage from "../assets/partners.png"

function Partners() {
	return (
		<section className='py-16 grid grid-cols-1  gap-4 mx-auto container items-center'>
			<header className='text-center  flex flex-col gap-4'>
				<p className='font-bold text-2xl'>Partners and Sponsors</p>
				<p className="leading-7">
					Getlinked Hackathon 1.0 is honored to have the following major
					companies as its partners and sponsors
				</p>
			</header>
            <img className="w-full"  src={partnersImage} alt="partnersImage" />
		</section>
	);
}

export default Partners;
