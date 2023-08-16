import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "../Offers/OffersStyles";
// import { OffersData } from "../../data/List";
import LandingPage from "../../assets/LandingPage.png";
import LandingPage2 from "../../assets/LandingPage2.png";

const Offers = () => {
  const classes = useStyles();
  return (
    <>
      <Box padding="96px 100px">
        <Typography className={classes.head}>Offers</Typography>
        <Typography
          borderBottom="6px solid #ebb273"
          margin="0px 579px"
        ></Typography>
        <Grid container paddingTop="30px">
          <Grid item xs={6}>
            <Card className={classes.cardDetails}>
              <CardContent className={classes.card}>
                <Typography className={classes.discount}>
                  30% OFF
                </Typography>
                <Typography className={classes.heading}>
                  Long Hair Style
                </Typography>
                <Typography className={classes.para}>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                  Elit ...
                </Typography>
              </CardContent>
              <CardMedia>
                <img src={LandingPage} height="385" width="415" />
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.cardDetails1}>
              <CardContent className={classes.card}>
                <Typography className={classes.discount}>
                  10% OFF
                </Typography>
                <Typography className={classes.heading}>
                  Beard
                </Typography>
                <Typography className={classes.para}>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                  Elit ...
                </Typography>
              </CardContent>
              <CardMedia>
                <img src={LandingPage2} height="385" width="415" />
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Offers;
