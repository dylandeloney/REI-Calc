import React from "react";
import "./form.css";
import {
	TextField,
	Grid,
	Stack,
	Divider,
	MenuItem,
	InputAdornment,
} from "@mui/material";

function PropertyDescription() {
	const bedList = [
		"Studio",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10+",
	];

	const bathList = [
		"1",
		"1.5",
		"2",
		"2.5",
		"3",
		"3.5",
		"4",
		"4.5",
		"5.5",
		"6",
		"6.5",
		"7",
		"7.5",
		"8",
		"8.5",
		"9",
		"9.5",
		"10+",
	];
	return (
		<div>
			<form action="">
				{/* Property Name Form Section */}
				<div className="form-group">
					<h3>Title</h3>

					<div className="form-fields">
						<TextField
							fullWidth
							label="Property Name"
							variant="outlined"
							margin="normal"
						/>
						<br />

						<TextField
							fullWidth
							label="Short Description"
							multiline
							rows={2}
							variant="outlined"
							margin="normal"
							helperText="This short description will be displayed in reports.
                            "
						/>
					</div>
				</div>

				{/* Property Address Form Section */}

				<div className="form-group">
					<h3>Address</h3>
					<div className="form-fields">
						<Grid
							container
							columnSpacing={4}
							columns={16}
							style={{
								textAlign: "center",
							}}>
							<Grid item xs={8}>
								<TextField
									fullWidth
									label="Street Address"
									variant="outlined"
									margin="normal">
									xs=8
								</TextField>
							</Grid>
							<Grid item xs={8}>
								<TextField
									fullWidth
									label="City"
									variant="outlined"
									margin="normal">
									xs=8
								</TextField>
							</Grid>
							<Grid item xs={8}>
								<TextField
									fullWidth
									label="State"
									variant="outlined"
									margin="normal">
									xs=8
								</TextField>
							</Grid>
							<Grid item xs={8}>
								<TextField
									fullWidth
									label="ZIP Code"
									variant="outlined"
									margin="normal">
									xs=8
								</TextField>
							</Grid>
						</Grid>
					</div>
				</div>

				{/* Property Name Form Section */}
				<div className="form-group">
					<h3>Property Description</h3>

					<div className="form-fields">
						<Stack
							style={{ marginTop: "2rem" }}
							divider={<Divider orientation="horizontal" flexItem />}
							spacing={2}>
							{/* Property Type Field */}
							<div>
								<TextField
									value="singleFamily"
									fullWidth
									select
									label="Property Type">
									<MenuItem value="singleFamily">Single Family</MenuItem>
									<MenuItem value="multiFamily">Multi-family</MenuItem>
								</TextField>
							</div>
							<div>
								<Grid
									container
									columnSpacing={4}
									columns={16}
									style={{
										textAlign: "center",
									}}>
									<Grid item xs={8}>
										<TextField value="Studio" fullWidth select label="Bedrooms">
											{bedList.map((bed, index) => (
												<MenuItem key={index} value={bed}>
													{bed}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={8}>
										<TextField value="1" fullWidth select label="Bathrooms">
											{bathList.map((bath, index) => (
												<MenuItem key={index} value={bath}>
													{bath}
												</MenuItem>
											))}
										</TextField>
									</Grid>
								</Grid>
							</div>
							{/* Square Footage Field */}
							<div>
								<Grid
									container
									columnSpacing={4}
									columns={16}
									style={{
										textAlign: "center",
									}}>
									<Grid item xs={8}>
										<TextField
											fullWidth
											label="Square Footage"
											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														ft&sup2;
													</InputAdornment>
												),
											}}></TextField>
									</Grid>
									<Grid item xs={8}>
										<TextField
											fullWidth
											label="Lot Size"
											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														ft&sup2;
													</InputAdornment>
												),
											}}></TextField>
									</Grid>
								</Grid>
							</div>
						</Stack>
					</div>
				</div>
			</form>
		</div>
	);
}

export default PropertyDescription;
