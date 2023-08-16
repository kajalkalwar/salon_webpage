import { Box, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";
import Image7 from "../../assets/Image7.png";
import { useStyles } from "../Features/FeaturesStyles";

const Features = () => {
  const classes = useStyles();
  return (
    <>
      <Box margin="0px 120px" padding="55px 24px">
        <Grid container>
          <Grid item xs={8}>
            <Box>
              <Box>
                <Typography fontSize="35px" fontWeight="bold">
                  Our Best Features
                </Typography>
                <Typography
                  borderBottom="6px solid #ebb273"
                  width="30px"
                ></Typography>
                <Box>
                  <Typography className={classes.para}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                  </Typography>
                  <Typography className={classes.para2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Typography>
                </Box>
              </Box>
              <Grid container>
                <Grid item xs={6}>
                  <Box className={classes.imgDetails}>
                    <img src={Image3} alt="Image3" />
                    <Typography className={classes.imgHeading}>
                      Easy Way To Appointment
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.imgDetails}>
                    <img src={Image4} alt="Image4" />
                    <Typography className={classes.imgHeading}>
                      Best Team
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.imgDetails}>
                    <img src={Image5} alt="Image5" />
                    <Typography className={classes.imgHeading}>
                      Good Discount
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.imgDetails}>
                    <img src={Image6} alt="Image6" />
                    <Typography className={classes.imgHeading}>
                      300+ Happy Customers
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box marginLeft="50px">
              <img src={Image7} alt="Image7" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Features;
