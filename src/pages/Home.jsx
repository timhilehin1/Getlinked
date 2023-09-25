import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
	return (
		<div className='px-6 md:px-0'>
			<Navbar />
			<Hero />
		</div>
	);
}

export default Home;
