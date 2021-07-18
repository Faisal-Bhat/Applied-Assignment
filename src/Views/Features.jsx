import React from "react";
import { Grid } from "@material-ui/core";
import { Parallax } from "react-parallax";

function Features() {
  return (
    <>
      <div id="features" className="mt-10">
        <Parallax bgImage="/assets/bg-1.jpg" strength={300}>
          <div style={{ height: 350, paddingTop: "100px" }}>
            <Grid container spacing={2}>
              <Grid item md={2}></Grid>
              <Grid item md={3}>
                <div className="mt-20">
                  <h4>Research Facility</h4>
                  <p>
                    The research labs at our study sites use state-of-the-art
                    equipment operated by highly qualified technicians
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img src="/assets/img-1.jpg" alt="Img" width="100%"></img>
              </Grid>
              <Grid item md={3}></Grid>
            </Grid>
          </div>
        </Parallax>
        <Parallax bgImage="/assets/bg-3.jpg" strength={300}>
          <div style={{ height: 350, paddingTop: "100px" }}>
            <Grid container spacing={2}>
              <Grid item md={3}></Grid>
              <Grid item md={4}>
                <img src="/assets/img-2.jpg" alt="Img" width="100%"></img>
              </Grid>
              <Grid item md={3}>
                <div className="mt-20">
                  <h4>Monthly Check-ups</h4>
                  <p>
                    The study conducts the patients check ups every third
                    weekend of a month to keep track of patients recivery and
                    health.
                  </p>
                </div>
              </Grid>
              <Grid item md={2}></Grid>
            </Grid>
          </div>
        </Parallax>
        <Parallax bgImage="/assets/bg-4.jpg" strength={300}>
          <div style={{ height: 350, paddingTop: "100px" }}>
            <Grid container spacing={2}>
              <Grid item md={2}></Grid>
              <Grid item md={3}>
                <div className="mt-20">
                  <h4>In-home Check-ups</h4>
                  <p>
                    Eligible candidated can choose for in-home consultation
                    every minth from our trained study professionals.
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img src="/assets/img-3.jpg" alt="Img" width="100%"></img>
              </Grid>
              <Grid item md={3}></Grid>
            </Grid>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Features;
