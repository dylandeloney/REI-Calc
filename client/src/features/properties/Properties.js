import React, { useState } from "react";
import NewPropertyForm from "../newPropertyForm/NewPropertyForm";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function Properties() {
	const [display, setDisplay] = useState("list");
	const type = useSelector((state) => state.properties.type);

	return (
		<div>
			<h1>{type}</h1>
			{display !== "list" ? (
				<NewPropertyForm setDisplay={setDisplay} />
			) : (
				<div>
					<Button
						onClick={() => setDisplay("new")}
						style={{ marginLeft: "80%", marginBottom: "1rem" }}
						size="small"
						variant="contained">
						New Property
					</Button>
					<Stack spacing={2}>
						<Item>Item 1</Item>
						<Item>Item 2</Item>
						<Item>Item 3</Item>
					</Stack>{" "}
				</div>
			)}
		</div>
	);
}

export default Properties;
