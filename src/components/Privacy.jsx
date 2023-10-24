import React from "react";
import terms from "../assets/terms&Conditions.png";
import approved from "../assets/approved.svg";
import {CustomButton} from "./Button";
import privacy1 from "../assets/privacy1.png";
import privacy2 from "../assets/privacy2.png";

function Privacy() {
	return (
		<section className='py-16 grid grid-cols-1  md:grid md:grid-cols-2  gap-4 mx-auto container items-center'>
            <div className="flex flex-col gap-8">
			<header className='flex flex-col gap-4 text-center md:text-left'>
				<p className='text-3xl font-bold'>
					Privacy Policy and <br />
					<span className='text-primary-color'>Terms</span>
				</p>
				<p className='text-[rgba(255,255,255,0.75)] leading-7'>
					Last updated on september 28, 2023
				</p>
				<p>
					Below are our privacy & policy, which outline a lot of goodies. it’s
					our aim to always take of our participant
				</p>
			</header>
			<div className='w-full py-4 px-2 md:py-8 md:px-8 text-center border border-[#D434FE] leading-7 flex flex-col gap-4'>
				<p>
					At getlinked tech Hackathon 1.0, we value your privacy and are
					committed to protecting your personal information. This Privacy Policy
					outlines how we collect, use, disclose, and safeguard your data when
					you participate in our tech hackathon event. By participating in our
					event, you consent to the practices described in this policy.
				</p>
				<p className='text-primary-color font-bold'>Licensing Policy</p>
				<p className='font-bold'>Here are terms of our Standard License:</p>
				<div className='flex flex-col gap-4'>
					<p className='flex flex-row gap-4'>
						<img className='self-start' src={approved} alt='approved' />
						<p className=''>
							The Standard License grants you a non-exclusive right to navigate
							and register for our event
						</p>
					</p>

					<p className='flex flex-row gap-4'>
						<img className='self-start' src={approved} alt='approved' />
						<p className=''>
							You are licensed to use the item available at any free source
							sites, for your project developement
						</p>
					</p>
					<div className='text-center mt-4'>
						<CustomButton text={"Read More"} />
					</div>
				</div>
			</div>
            </div>

			<div className='images relative w-full'>
				<img className='absolute left-10 right-0 w-full' src={privacy1} alt='privacy1' />
                <img className='mt-16 w-full' src={privacy2} alt='privacy2' />
			</div>
		</section>
	);
}

export default Privacy;
