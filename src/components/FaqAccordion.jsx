import { React, useState } from "react";
import {
	AccordionDetails,
	Accordion,
	AccordionSummary,
	Typography,
} from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FaqAccordion({ text, title }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<Accordion
			disableGutters={true}
			className='mt-8'
			onChange={() => setExpanded(!expanded)}
			sx={{
				bgcolor: "inherit",
				color:"#fff",
				borderBottom: "1px solid #D434FE",
			}}
		>
			<AccordionSummary
				expandIcon={
					expanded ? (
						<AiOutlineMinus style={{ color: "#D434FE" }} size={20} />
					) : (
						<AiOutlinePlus style={{ color: "#D434FE" }} size={20} />
					)
				}
				aria-controls='accordion-content'
				id='accordion-header'
			>
				<Typography sx={{fontFamily:"Montserrat, sans-serif"}}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography sx={{fontFamily:"Montserrat, sans-serif"}}>{text}</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

export default FaqAccordion;
