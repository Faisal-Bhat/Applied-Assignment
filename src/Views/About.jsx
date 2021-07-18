import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, Card } from "@material-ui/core";
import { Parallax } from "react-parallax";

function About() {
  return (
    <>
      <Parallax bgImage="/assets/bg-2.jpg" strength={500}>
        <div style={{ height: 500 }} id="about">
          <h3 className="text-white text-center mt-20">About The Study</h3>
          <p className="text-white text-center">
            Here are some Highlights of our study
          </p>
          <Grid container spacing={2}>
            <Grid item md={2}></Grid>
            <Grid item md={4}>
              <Card className="p-5 my-4 bg-light-gray">
                <h4>Eligibilty</h4>
                <p>
                  18 years or older participants with symptoms of MDS or anemia.
                </p>
              </Card>
              <Card className="p-5 my-4 bg-light-gray">
                <h4>Treatment Period</h4>
                <p>
                  The total treatment period of this study is about 20-24 weeks.
                </p>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-5 my-4 bg-light-gray">
                <h4>Monthly Check-ups</h4>
                <p>
                  A check-up of every third weekend of a month to keep track of
                  patient's health and recovery.
                </p>
              </Card>
              <Card className="p-5 my-4 bg-light-gray">
                <h4>Compensation</h4>
                <p>
                  Participants might recieve upto $30 for taking part in the
                  study.
                </p>
              </Card>
            </Grid>
            <Grid item md={2}></Grid>
          </Grid>
        </div>
      </Parallax>
      <Grid container spacing={2}>
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <Card
            className="px-7 py-10 mx-8 my-20 bg-light-gray"
            style={{ borderLeft: "2px solid #ff6666" }}
          >
            <h4>What is MDS and anemia?</h4>
            <p>
              MDS is a rere blood cancer in which blood cells in the bone marrow
              do not grow to become healthy red blood cells, whitw blood cells,
              or platelets - all the vital components of blood.Not being able to
              develop healthy red blood cells leads to anemia, which is common
              with MDS. Anemia has many of the same symptoms as MDS and causes
              even greater fatigue.
            </p>
            <p>
              It can be exhausting to live with a condition that makes you feel
              like you are being held back. If you're caring for a loved one
              with the condition, it can be equally trying. However, right now,
              research is underway on an investigational study drug to see if it
              may help alleviate anemic symptoms and better manage your MDS. And
              you may be able to take part in this study.
            </p>
          </Card>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <Card className="p-15 mx-8 my-20 bg-primary text-white">
            <h4>Lets find out if you are eligible of this study?</h4>
            <p className="my-10">
              Take up questionare to help us determine if you have symptoms that
              are common for MDS and anemia. If you have common symptoms, you
              may be eligible to take part in the study.
            </p>
            <Button variant="contained" color="secondary">
              Start answering &#8594;
            </Button>
          </Card>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </>
  );
}

export default About;
