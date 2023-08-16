//@ts-nocheck
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../AboutUs/AboutUsStyles";
import Video from "../../assets/video.mp4";
const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container} padding="150px 120px">
        <Grid container>
          <Grid item xs={6}>
            <iframe
              src={Video}
              title="spa video"
              height="360px"
              width="580px"
            />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={classes.heading}>
                About Us
              </Typography>
              <Typography className={classes.para}>
                Welcome To Salon Shop
              </Typography>
              <Typography
                borderBottom="6px solid #ebb273"
                width="30px"
              ></Typography>
              <Typography className={classes.para2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus
                vel facilisis.
              </Typography>
              <Typography className={classes.para2}>
                Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
