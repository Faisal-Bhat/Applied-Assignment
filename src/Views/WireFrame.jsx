import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Grid,
  Avatar,
  Toolbar,
  Paper,
} from "@material-ui/core";
import About from "./About";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Features from "./Features";
import Journey from "./Journey";
import Question from "./Question";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgba(225, 225, 225, .5)",
    boxShadow: "none",
    // marginBottom: "20em",
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

function WireFrame() {
  const classes = useStyles();
  return (
    <>
      <Paper
        id="home"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "12em",
          paddingBottom: "15em",
          backgroundImage: `url("/assets/bg-1.jpg")`,
          backgroundAttachment: "fixed",
        }}
      >
        <AppBar className={classes.appBar} position="fixed">
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
        <Grid container spacing={1}>
          <Grid item sm={12} xs={12} md={2}></Grid>
          <Grid item sm={12} xs={12} md={5}>
            <h1 className="mt-20">
              A clinical research study for people with myelodysplastic
              syndromes with anemia.
            </h1>
            <p>
              This study is to compare the effectivenessof a study drug versus a
              standard-of-care therapy.Individuals will be evaluated to
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
      </Paper>

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
      <About />
      <FrequentlyAskedQuestions />
      <Features />
      <Journey />
      <Question />
      <Footer />
    </>
  );
}

export default WireFrame;
