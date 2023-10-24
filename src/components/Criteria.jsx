import React from "react";
import criteriaImage from "../assets/criteria.png";
import {CustomButton} from "./Button";

function Criteria() {
	const texts = [
		{
			id: 1,
			title: "Innovation and Creativity",
			text: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features",
		},
		{
			id: 2,
			title: "Functionality",
			text: " Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
		},
		{
			id: 3,
			title: "Impact and Relevance",
			text: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
		},
		{
			id: 4,
			title: "Technical Complexity",
			text: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
		},
		{
			id: 5,
			title: "Adherence to Hackathon Rules",
			text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
		},
	];
	return (
		<section className='grid grid-cols-1  md:grid md:grid-cols-2 py-16  gap-4 mx-auto container justify-between'>
			<div>
				<img
					className='object-contain'
					src={criteriaImage}
					alt='Criteria image'
				/>
			</div>

			<p className='leading-7 text-center md:text-left'>
				<h3 className='text-3xl font-bold'>
					Judging Criteria <br />
					<span className='text-primary-color'>Key attributes</span>
				</h3>
				<div className='flex flex-col gap-4 text-base text-center md:text-left'>
					{texts.map((text) => {
						return (
							<p key={text.id} className='leading-8'>
								<span className='text-[#FF26B9]'>{text.title}</span>: {text.text}
							</p>
						);
					})}
                    <div className="mx-auto md:mx-0"><CustomButton text={"Read More"} /></div>
				</div>
				
			</p>
		</section>
	);
}

export default Criteria;
