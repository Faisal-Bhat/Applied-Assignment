import { Parallax } from "react-parallax";
import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Grid,
  Avatar,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgba(225, 225, 225, .5)",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: "10px",
    color: "black",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Parallax
        bgImage="/assets/bg-1.jpg"
        strength={500}
        bgImageStyle={{ height: "100%", width: "100%" }}
      >
        <div style={{ height: 700 }}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Link to="home" spy={true} smooth={true}>
                <Avatar variant="rounded" alt="Ic" src="/assets/logo.png" />
              </Link>
              <Typography className={classes.title}>iConnect</Typography>
              <Link to="about" spy={true} smooth={true}>
                <Button>About</Button>
              </Link>
              <Link to="faq" spy={true} smooth={true}>
                <Button>FAQ</Button>
              </Link>
              <Link to="features" spy={true} smooth={true}>
                <Button>Features</Button>
              </Link>
              <Link to="journey" spy={true} smooth={true}>
                <Button>Journey</Button>
              </Link>
              <Link to="question" spy={true} smooth={true}>
                <Button variant="contained" color="primary">
                  Am i eligible?
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
          <Grid container spacing={1} className="mt-20">
            <Grid item sm={12} xs={12} md={2}></Grid>
            <Grid item sm={12} xs={12} md={5} className="pl-10 mt-20">
              <h1 className="mt-20">
                A clinical research study for people with myelodysplastic
                syndromes with anemia.
              </h1>
              <p className="text-15">
                This study is to compare the effectivenessof a study drug versus
                a standard-of-care therapy.Individuals will be evaluated to
                determine their eligibility to participate.Each person who
                qualifies will recieve either the study drug or standard-of-care
                therapy,study related medical exams,and study-related laboratory
                tests at no cost.
              </p>
              <Button variant="contained" color="primary">
                Check my eligibility
              </Button>
              <Button variant="outlined" color="primary" className="ml-3">
                Learn More
              </Button>
            </Grid>
            <Grid item sm={12} xs={12} md={5}></Grid>
          </Grid>
        </div>
      </Parallax>
      <Grid container spacing={1} className="mb-20">
        <Grid item sm={12} xs={12} md={3}></Grid>
        <Grid item sm={12} xs={12} md={7}>
          <h3 className="mt-20 mb-10">
            Are blood transfusions holding you back?
          </h3>
          <p>
            The purpose of study is to compare the effectiveness of a study drug
            versus a standard-of-care therapy. Individuals will be evaluated to
            determine their eligibility to participate.Each person who qualifies
            will recieve either the study drug or standard-of-care therapy,study
            related medical exams,and study-related laboratory tests at no cost.
          </p>
        </Grid>
        <Grid item sm={12} xs={12} md={2}></Grid>
      </Grid>
    </>
  );
}

export default Home;
