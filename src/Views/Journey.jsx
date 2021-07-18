import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function getSteps() {
  return [
    "Check eligibility",
    "Screening Period",
    "Treatment Period",
    "Follow-up Period",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          Check your eligibilty by taking up the{" "}
          <a href="/" className="text-primary">
            eligibility test
          </a>
          . If you are eligible you can connect with the team at the study sight
          of your choice.
        </div>
      );
    case 1:
      return "The team will connect with you and screen you with other preliminary tests. This can take upto 30-35 days which may be extended";
    case 2:
      return `Eligible candidates will recieve initial treatment for upto 24 weeks during which the health, sleep and physical activities will be monitored.`;
    case 3:
      return "A follow-up period where you will be contacted approximately every 12 weeks to ask how you are doing.";
    default:
      return "Unknown step";
  }
}

export default function Journey() {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <Grid container spacing={2} className="my-20" id="journey">
      <Grid item md={2}></Grid>
      <Grid item md={8}>
        <div className="mt-10">
          <div className="text-center text-18 font-medium">Patient Journey</div>
        </div>
        <div className={classes.root}>
          <Stepper orientation="vertical">
            {steps.map((label, index) => (
              <Step key={index} active={true}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}
