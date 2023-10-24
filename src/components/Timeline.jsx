import React from "react";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.png";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import timeLine from "../assets/timeline.png";
import shortLine from "../assets/shortLine.png";
import smallOne from "../assets/smallOne.png";
import smallSix from "../assets/smallSix.png";
import smallTwo from "../assets/smallTwo.png";
import smallThree from "../assets/smallThree.png";
import smallFour from "../assets/smallFour.png";
import smallFive from "../assets/smallFive.png";
import mobileLine from "../assets/mobileLine.png";

function Timeline() {
	return (
		//desktop view
		<>
			<section className='py-16  mx-auto container hidden md:block'>
				<header className='flex flex-col items-center justify-center gap-4 leading-8'>
					<h3 className='font-bold text-3xl'>Timeline</h3>
					<p className='text-base'>
						Here is the breakdown of the time we anticipate using for the
						upcoming event.
					</p>
				</header>
				{/* line */}
				<img className='mx-auto mt-4' src={timeLine} alt='line' />
				<section className='flex items-center   mt-8 text-base justify-between  timeline_container'>
					<div className='flex flex-col gap-2 text-right'>
						<p className='text-primary-color font-bold text-lg'>
							Hackathon Announcement
						</p>
						<p className=''>
							The getlinked tech hackathon 1.0 is formally announced <br /> to
							the general public and teams begin to get ready to register
						</p>
					</div>
					<img className='' src={one} alt='one' />
					<p className='text-primary-color font-bold text-lg'>
						November 18, 2023
					</p>
				</section>
				{/* line */}
				<img className='mx-auto mt-4' src={shortLine} alt='timeLine' />

				<section className='flex items-center  mt-8 text-base  justify-between  timeline_container'>
					<p className='text-primary-color font-bold text-lg text-right'>
						November 18, 2023
					</p>
					<img className='' src={two} alt='one' />
					<div className='flex flex-col gap-2'>
						<p className='text-primary-color font-bold text-lg'>
							Teams Registration begins
						</p>
						<p className=''>
							Interested teams can now show their interest in the <br />
							getlinked tech hackathon 1.0 2023 by proceeding to register
						</p>
					</div>
				</section>

				{/* line */}
				<img className='mx-auto mt-4' src={shortLine} alt='timeLine' />

				<section className='flex items-center   mt-8 text-base  timeline_container'>
					<div className='flex flex-col gap-2 text-right'>
						<p className='text-primary-color font-bold text-lg'>
							Team Registration ends
						</p>
						<p className=''>
							Interested Participants are no longer Allowed to register
						</p>
					</div>
					<img className='' src={three} alt='one' />
					<p className='text-primary-color font-bold text-lg'>
						November 18, 2023
					</p>
				</section>

				{/* line */}
				<img className='mx-auto mt-4' src={shortLine} alt='timeLine' />

				<section className='flex items-center  mt-8 text-base   timeline_container'>
					<p className='text-primary-color font-bold text-lg text-right'>
						November 18, 2023
					</p>
					<img className='' src={four} alt='four' />
					<div className='flex flex-col gap-2'>
						<p className='text-primary-color font-bold text-lg'>
							Announcement of the accepted teams and ideas
						</p>
						<p className=''>
							All teams whom idea has been accepted into getlinked tech
							hackathon 1.0 2023 are formally announced
						</p>
					</div>
				</section>

				{/* line */}
				<img className='mx-auto mt-4' src={shortLine} alt='timeLine' />

				<section className='flex items-center  mt-8 text-base  timeline_container'>
					<div className='flex flex-col gap-2 text-right'>
						<p className='text-primary-color font-bold text-lg'>
							Getlinked Hackathon 1.0 Offically Begins
						</p>
						<p className=''>
							Accepted teams can now proceed to build their ground breaking
							skill driven solutions
						</p>
					</div>
					<img className='' src={five} alt='five' />
					<p className='text-primary-color font-bold'>November 18, 2023</p>
				</section>

				{/* line */}
				<img className='mx-auto mt-4' src={shortLine} alt='timeLine' />

				<section className='flex items-center  mt-8 text-base  timeline_container'>
					<p className='text-primary-color font-bold text-right'>
						November 18, 2023
					</p>
					<img className='' src={six} alt='six' />
					<div className='flex flex-col gap-2'>
						<p className='text-primary-color font-bold text-lg'>Demo Day</p>
						<p className=''>
							Teams get the opportunity to pitch their projects to judges. The
							winner of the hackathon will also be announced on this day
						</p>
					</div>
				</section>
			</section>

			{/* //mobie view */}
			<section className='py-16 flex flex-col gap-4  mx-auto container md:hidden'>
				<header className='flex flex-col items-center justify-center gap-4 leading-8'>
					<h3 className='font-bold text-xl'>Timeline</h3>
					<p className='text-base text-center'>
						Here is the breakdown of the time we anticipate using for the
						upcoming event.
					</p>
				</header>
				<section className='flex gap-4 mt-2'>
					<div className='left_hand_numbering flex flex-col gap-5 items-center'>
						<div className='mobileLine'></div>
						{/* <img className='' src={mobileLine} alt='smallOne' /> */}
						<img className='' src={smallOne} alt='smallOne' />
					</div>

					<div className='leading-7  flex flex-col gap-0.5 w-full'>
						<p className='text-primary-color font-bold text-base'>
							Hackathon Announcement
						</p>
						<p className='leading-7'>
							The getlinked tech hackathon 1.0 is formally announced to the
							general public and teams begin to get ready to register
						</p>
						<p className='text-primary-color font-bold text-base mt-4'>
							November 18, 2023
						</p>
					</div>
				</section>

				<section className='flex gap-4 mt-2'>
					<div className='left_hand_numbering flex flex-col gap-5 items-center'>
						<div className='mobileLine'></div>
						<img className='' src={smallTwo} alt='smallOne' />
					</div>

					<div className='leading-7 text-left flex flex-col gap-0.5 w-full'>
						<p className='text-primary-color font-bold text-base'>
							Teams Registration begins
						</p>
						<p className='leading-7 '>
							Interested teams can now show their interest in the <br />
							getlinked tech hackathon 1.0 2023 by proceeding to register
						</p>
						<p className='text-primary-color font-bold text-base'>
							November 18, 2023
						</p>
					</div>
				</section>

				<section className='flex gap-4 mt-2'>
					<div className='left_hand_numbering flex flex-col gap-5 items-center'>
						<div className='mobileLine'></div>
						<img className='' src={smallThree} alt='smallOne' />
					</div>

					<div className='leading-7 text-left flex flex-col gap-0.5 w-full'>
						<p className='text-primary-color font-bold text-base'>
							Team Registration ends
						</p>
						<p className='leading-7'>
							Interested Participants are no longer Allowed to register
						</p>
						<p className='text-primary-color font-bold text-base mt-auto'>
							November 18, 2023
						</p>
					</div>
				</section>

				<section className='flex gap-4 mt-2'>
					<div className='left_hand_numbering flex flex-col gap-2 items-center'>
						<div className='mobileLine'></div>
						<img className='' src={smallFour} alt='smallOne' />
					</div>

					<div className='leading-7 text-left flex flex-col gap-0.5 w-full'>
						<p className='text-primary-color font-bold text-base'>
							Announcement of the accepted teams and ideas
						</p>
						<p className='leading-7'>
							All teams whom idea has been accepted into getlinked tech
							hackathon 1.0 2023 are formally announced
						</p>
						<p className='text-primary-color font-bold text-base'>
							November 18, 2023
						</p>
					</div>
				</section>

				<section className='flex gap-4 mt-2'>
					<div className='left_hand_numbering flex flex-col gap-5 items-center'>
						<div className='mobileLine'></div>
						<img className='' src={smallFive} alt='smallFive' />
					</div>

					<div className='leading-7 text-left flex flex-col gap-0.5 w-full'>
						<p className='text-primary-color font-bold text-base'>
							Getlinked Hackathon 1.0 Offically Begins
						</p>
						<p className='leading-7'>
							Accepted teams can now proceed to build their ground breaking
							skill driven solutions
						</p>
						<p className='text-primary-color font-bold text-base mt-auto'>
							November 18, 2023
						</p>
					</div>
				</section>

				<section className='flex gap-4 mt-2'>
					<div className='left_hand_numbering flex flex-col gap-5 items-center'>
						<div className='mobileLine'></div>
						<img className='' src={smallSix} alt='smallSix' />
					</div>

					<div className='leading-7 text-left flex flex-col gap-0.5 w-full'>
						<p className='text-primary-color font-bold text-base'>Demo Day</p>
						<p className='leading-7'>
							Interested teams can now show their interest in the getlinked tech
							hackathon 1.0 2023 by proceeding to register
						</p>
						<p className='text-primary-color font-bold text-base mt-auto'>
							November 18, 2023
						</p>
					</div>
				</section>
			</section>
		</>
	);
}

export default Timeline;
