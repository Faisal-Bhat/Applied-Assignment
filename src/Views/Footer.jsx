import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-scroll";

function Footer() {
  return (
    <Grid container spacing={1} className="mt-20 mb-5 px-10" id="footer">
      <Grid item md={2}></Grid>
      <Grid container md={8}>
        <Grid item md={3}>
          <div className="mb-15">
            <h5>Address</h5>
            <p>350 5th Ave, New York, NY 10118, USA</p>
          </div>
          <div>
            <h5>Contacts</h5>
            <div>support@iconnect.com</div>
            <div>+1 (0) 000 0000 001</div>
            <div>+1 (0) 000 0000 002</div>
          </div>
        </Grid>
        <Grid item md={5}>
          <h5>Links</h5>
          <div>
            <Link to="about" spy={true} smooth={true} className="text-primary">
              About
            </Link>
          </div>
          <div>
            <Link to="faq" spy={true} smooth={true} className="text-primary">
              FAQ
            </Link>
          </div>
          <div>
            <Link
              to="question"
              spy={true}
              smooth={true}
              className="text-primary"
            >
              Eligibility
            </Link>
          </div>
          <div>
            <Link
              to="features"
              spy={true}
              smooth={true}
              className="text-primary"
            >
              Features
            </Link>
          </div>
          <div>
            <Link
              to="journey"
              spy={true}
              smooth={true}
              className="text-primary"
            >
              Journey
            </Link>
          </div>
        </Grid>
        <div className="mt-20 mb-10 text-light-white">
          &#169; Copyright 2021 iConnect - All Rights Reserved
        </div>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}

export default Footer;
