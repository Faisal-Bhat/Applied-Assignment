import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Grid } from "@material-ui/core";
const rows = [
  {
    question: "What do i have to do in the study?",
    answer:
      "Particiapte in various study activities, such as screening visit, eligibility review, and a treatment period, over the course of about 3 months. This include sa 6-week treatment period where participants apply the study treatment 2x per day, send weekly photos of theor lower legs, and have a weekly video visit with the study coach. This study will conclude with an in-home visit when you end treatment and a video follow-up visit 4 weeks later.We will Provide allinstructions and devices neededto participate in the study.",
  },
  {
    question: "How Long is the study?",
    answer:
      "This study will last about 14 weeks, including 6 weeks using the study ointment and 4 weeks of follow-up.",
  },
  {
    question: "Can i continue to wear compression socks during the study?",
    answer:
      "Since compression stockings are often recommended for those suffering from Stasis Dermatitis, we ask that you are using comprssion stockings today, that you continue to wear them duringthe study. That said, wearing compression stockings is not required for this study.",
  },
  {
    question: "What is at-home clinical study?",
    answer:
      "An at-home (or remote) clinical study is one in whicg you can fully participate at your home. This means there is no need to visit a doctor's office, lab or hospital. We will deliver any material you may need to participate, and you'll be able to mail items back to us that need to be returned inthe regular mail.",
  },
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <h5>{row.question}</h5>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            color="primary"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={3}>{row.answer}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function FrequentlyAskedQuestions() {
  return (
    <Grid container spacing={2} id="faq">
      <Grid item md={2}></Grid>
      <Grid item md={8}>
        <div className="mx-8">
          <h3 className="text-center mb-10">Frequently askes questions</h3>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableBody>
                {rows.map((row, index) => (
                  <Row key={index} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}
