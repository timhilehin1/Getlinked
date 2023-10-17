import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

function RouterPage() {
	return (
		<Router>
			<Routes>
                <Route path='/' element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/register" element={<Register />} />
            </Routes>
		</Router>
	);
}

export default RouterPage;
