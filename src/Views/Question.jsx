import React from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";

function Question() {
  return (
    <Paper
      id="question"
      style={{
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("/assets/bg-2.jpg")`,
        paddingTop: "4em",
        paddingBottom: "4em",
        boxShadow: "none",
      }}
    >
      <h3 className="text-white text-center mb-10">Got a Question?</h3>
      <Grid container spacing={2}>
        <Grid item md={3}></Grid>
        <Grid container md={6} spacing={2} className="px-20">
          <Grid item md={6}>
            <TextField
              className="bg-white border-radius-6"
              variant="outlined"
              size="small"
              label="Name"
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              className="bg-white border-radius-6"
              variant="outlined"
              size="small"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item md={12} className="text-center ">
            <TextField
              className="bg-white border-radius-6"
              variant="outlined"
              size="small"
              label="Question"
              multiline
              rows={2}
              fullWidth
            />
            <Button className="mt-4" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </Paper>
  );
}

export default Question;
