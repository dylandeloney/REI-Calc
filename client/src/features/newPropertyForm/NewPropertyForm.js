import React, { useState } from "react";
import PropertyDescription from "./PropertyDescription";
import PurchaseAndRehab from "./PurchaseAndRehab/PurchaseAndRehab";
import IncomeAndExpenses from "./IncomeAndExpenses/IncomeAndExpenses";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

const steps = [
	"Property Description",
	"Purchase & Rehab",
	"Income & Expenses",
	"Long-Term Projections",
];

function NewPropertyForm(props) {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	let component = null;

	switch (activeStep) {
		case 0: {
			component = <PropertyDescription />;
			break;
		}
		case 1: {
			component = <PurchaseAndRehab />;
			break;
		}

		case 2: {
			component = <IncomeAndExpenses />;
			break;
		}
		case 3: {
			component = <h1>4</h1>;
			break;
		}
		default: // if x not match
	}

	return (
		<div>
			<div
				style={{
					marginLeft: "auto",
					marginBottom: "1rem",
					display: "flex",
					width: "20%",
				}}>
				<Button>Save</Button>
				<Button
					size="small"
					variant="contained"
					color="primary"
					onClick={() => props.setDisplay("list")}>
					<CancelIcon />
				</Button>
			</div>
			<Box sx={{ width: "100%" }}>
				<Stepper activeStep={activeStep} style={{ marginBottom: "2rem" }}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>

				<React.Fragment>
					{component}
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}>
							Back
						</Button>
						<Box sx={{ flex: "1 1 auto" }} />
						{activeStep === steps.length - 1 ? (
							<Button>Save</Button>
						) : (
							<Button onClick={handleNext}>Next</Button>
						)}
					</Box>
				</React.Fragment>
			</Box>
		</div>
	);
}

export default NewPropertyForm;
