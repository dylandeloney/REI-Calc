import React from "react";
import { useDispatch } from "react-redux";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { setType } from "../properties/propertiesSlice";

function NavBar() {
	const dispatch = useDispatch();

	return (
		<div>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tab label="Rentals" onClick={() => dispatch(setType("Rentals"))} />
				<Tab label="BRRRRs" onClick={() => dispatch(setType("BRRRRs"))} />
			</Box>
		</div>
	);
}

export default NavBar;
