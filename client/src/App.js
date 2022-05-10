import React from "react";
import { NavBar, Properties } from "./features/index";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="myContainer">
				<Properties />
			</div>
		</div>
	);
}

export default App;
