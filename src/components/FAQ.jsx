import React from "react";
import faqImage from "../assets/faq.png";
import FaqAccordion from "./FaqAccordion";

function FAQ() {
	const texts = [
		{
			id: 1,
			title: "Can I work on a project I started before the hackathon?",
			text: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features",
		},
		{
			id: 2,
			title: "What happens if I need help during the hackathon?",
			text: " Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
		},
		{
			id: 3,
			title: "What happens if I don't have an idea for a project?",
			text: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
		},
		{
			id: 4,
			title: "Can I join a team or do I have to come with one?",
			text: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
		},
		{
			id: 5,
			title: "What happens after the hackathon ends",
			text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
		},
		{
			id: 6,
			title: "Can I work on a project I started before the hackathon?",
			text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
		},
	];
	return (
		<section className='grid grid-cols-1  md:grid md:grid-cols-2 py-16  gap-4 mx-auto container justify-between'>
			<p className='leading-8 text-center md:text-left'>
				<h3 className='text-3xl font-bold'>
					Frequently Ask <br />
					<span className='text-primary-color'>Question</span>
				</h3>
				<p>
					We got answers to the questions that you <br/> might want to ask about
					<span className="font-semibold"> getlinked Hackathon 1.0</span>
				</p>
				{texts.map((text) => {
					return <FaqAccordion title={text.title} text={text.text} />;
				})}
			</p>
			<div>
				<img className='object-contain' src={faqImage} alt='FAQ image' />
			</div>
		</section>
	);
}

export default FAQ;
