import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Footer/FooterStyles";
import footerSalon from "../../assets/footerSalon.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box paddingLeft="">
          <Grid container spacing={8}>
            <Grid lg={1.5}></Grid>
            <Grid item lg={3}>
              <Box>
                <img src={footerSalon} alt="salon" />
                <Typography
                  fontWeight="bold"
                  fontSize="16px"
                  color="#939290"
                  margin="30px 0px"
                >
                  lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </Typography>
                <Box>
                  <FacebookIcon className={classes.icon} />
                  <InstagramIcon className={classes.icon} />
                  <YouTubeIcon className={classes.icon} />
                </Box>
              </Box>
            </Grid>

            <Grid item lg={3}>
              <Box>
                <Typography className={classes.services}>
                  Popular Services
                </Typography>
                <Typography className={classes.border}></Typography>
                <Box className={classes.box}>
                  <KeyboardDoubleArrowRightIcon />
                  <Typography className={classes.title}>
                    Haircut & Colour
                  </Typography>
                </Box>
                <Box className={classes.box}>
                  <KeyboardDoubleArrowRightIcon />
                  <Typography className={classes.title}>
                    Nail
                  </Typography>
                </Box>
                <Box className={classes.box}>
                  <KeyboardDoubleArrowRightIcon />
                  <Typography className={classes.title}>
                    Massage
                  </Typography>
                </Box>
                <Box className={classes.box}>
                  <KeyboardDoubleArrowRightIcon />
                  <Typography className={classes.title}>
                    Beard
                  </Typography>
                </Box>
                <Box className={classes.box}>
                  <KeyboardDoubleArrowRightIcon />
                  <Typography className={classes.title}>
                    Facial
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={3}>
              <Box>
                <Typography className={classes.services}>
                  Contact Info
                </Typography>
                <Typography className={classes.border}></Typography>

                <Box className={classes.details}>
                  <PhoneIcon />
                  <Typography className={classes.head}>
                    9876543210
                  </Typography>
                </Box>
                <Box className={classes.details}>
                  <EmailIcon />
                  <Typography className={classes.head}>
                    salonexample@gmail.com
                  </Typography>
                </Box>
                <Box className={classes.details}>
                  <LocationOnIcon />
                  <Typography className={classes.head}>
                    121 king street eddy street and gough street, san
                    francisco, ca 94109
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid lg={1.5}></Grid>
          </Grid>
        </Box>
        <Box>
          <Box marginTop="40px">
            <hr />
            <Typography className={classes.footer}>
              © 2023 Salon | All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
