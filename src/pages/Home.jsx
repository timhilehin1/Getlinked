import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className='px-6 md:px-0'>
			<Navbar />
			<Hero />
			<Footer />
		</div>
	);
}

export default Home;
