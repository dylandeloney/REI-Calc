import React, { useState } from "react";
import "../form.css";
import {
	TextField,
	Stack,
	Divider,
	InputAdornment,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Button,
} from "@mui/material";

function PurchaseAndRehab() {
	const [purchaseFinance, setPurchaseFinance] = useState(false);
	const [customLoan, setCustomLoan] = useState(false);
	const [pmi, setPmi] = useState(false);

	return (
		<div>
			{/* Purchase Field */}
			<div className="form-group">
				<h3>Purchase </h3>

				<div className="form-fields">
					<Stack
						divider={<Divider orientation="horizontal" flexItem />}
						spacing={2}>
						<div>
							<TextField
								fullWidth
								label="Purchase Price"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">$</InputAdornment>
									),
								}}></TextField>{" "}
						</div>
						<div>
							<TextField
								fullWidth
								label="After Repair Value"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">$</InputAdornment>
									),
								}}></TextField>{" "}
						</div>

						{/* Square Footage Field */}
					</Stack>
				</div>
			</div>
			{/* Finance */}
			<div className="form-group">
				<h3>Finance </h3>

				<div className="form-fields">
					<Stack
						divider={<Divider orientation="horizontal" flexItem />}
						spacing={2}>
						<div>
							<FormControl>
								<FormLabel id="demo-row-radio-buttons-group-label">
									Use financing for purchase?
								</FormLabel>
								<RadioGroup
									value={purchaseFinance}
									onChange={(e) => setPurchaseFinance(!purchaseFinance)}
									row
									aria-labelledby="demo-row-radio-buttons-group-label"
									name="row-radio-buttons-group">
									<FormControlLabel
										control={<Radio value={false} />}
										label="No"
									/>
									<FormControlLabel
										control={<Radio value={true} />}
										label="Yes"
									/>
								</RadioGroup>
							</FormControl>
						</div>
						<div
							style={{
								display: purchaseFinance === false ? "none" : "",
							}}>
							<FormControl>
								<FormLabel id="demo-row-radio-buttons-group-label2">
									Use custom loan amount?
								</FormLabel>
								<RadioGroup
									value={customLoan}
									onChange={(e) => setCustomLoan(!customLoan)}
									row
									aria-labelledby="demo-row-radio-buttons-group-label2"
									name="row-radio-buttons-group">
									<FormControlLabel
										control={<Radio value={false} />}
										label="No"
									/>
									<FormControlLabel
										control={<Radio value={true} />}
										label="Yes"
									/>
								</RadioGroup>
							</FormControl>
							{customLoan ? (
								<TextField
									fullWidth
									margin="dense"
									label="Loan Amount"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">$</InputAdornment>
										),
									}}></TextField>
							) : (
								<TextField
									fullWidth
									margin="dense"
									label="Down Payment"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">%</InputAdornment>
										),
									}}></TextField>
							)}
							<TextField
								fullWidth
								label="Interest Rate"
								margin="dense"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">%</InputAdornment>
									),
								}}></TextField>{" "}
							<TextField
								fullWidth
								label="Loan Term"
								margin="dense"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Years</InputAdornment>
									),
								}}></TextField>{" "}
							<FormControl margin="dense">
								<FormLabel id="demo-row-radio-buttons-group-label2">
									Mortgage Insurace (PMI)?
								</FormLabel>
								<RadioGroup
									value={pmi}
									onChange={(e) => setPmi(!pmi)}
									row
									aria-labelledby="demo-row-radio-buttons-group-label2"
									name="row-radio-buttons-group">
									<FormControlLabel
										control={<Radio value={false} />}
										label="No"
									/>
									<FormControlLabel
										control={<Radio value={true} />}
										label="Yes"
									/>
								</RadioGroup>
							</FormControl>
							<div
								style={{
									display: pmi === false ? "none" : "",
								}}>
								<TextField
									fullWidth
									label="Upfront"
									margin="dense"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">% of loan</InputAdornment>
										),
									}}></TextField>{" "}
								<TextField
									fullWidth
									label="Reocurring"
									margin="dense"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												% of loan annually
											</InputAdornment>
										),
									}}></TextField>{" "}
							</div>
						</div>
					</Stack>
				</div>
			</div>
			<div className="form-group">
				<h3>Purchase Cost </h3>
				<div className="form-fields">
					<TextField
						style={{ width: "50%" }}
						label="Total"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">% of Price</InputAdornment>
							),
						}}></TextField>{" "}
					<Button
						style={{ marginLeft: "6rem" }}
						variant="contained"
						size="large">
						Itemize
					</Button>
				</div>
			</div>
			<div className="form-group">
				<h3>Rehab Cost </h3>
				<div className="form-fields">
					<TextField
						style={{ width: "50%" }}
						label="Total"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">$</InputAdornment>
							),
						}}></TextField>{" "}
					<Button
						style={{ marginLeft: "6rem" }}
						variant="contained"
						size="large">
						Itemize
					</Button>
				</div>
			</div>
		</div>
	);
}

export default PurchaseAndRehab;
