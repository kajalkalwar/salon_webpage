import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../DownloadApp/DownloadAppStyles";
import mobile from "../../assets/mobile.png";
import playstore from "../../assets/playstore.png";
import apple from "../../assets/apple.png";
import makeup from "../../assets/makeup.png";
const DownloadApp = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.backImage} margin="120px 0px 0px 0px">
        <Box className={classes.boxImage}>
          <img src={makeup} width="100%" height="500px" />
        </Box>

        <Grid
          container
          spacing={3}
          className={classes.grid}
          padding="50px 100px 0px 100px"
        >
          <Grid item xs={6}>
            <Box>
              <Typography fontSize="35px" fontWeight="bold">
                Download Salon App
              </Typography>
              <Typography
                borderBottom="6px solid #ebb273"
                width="40px"
              ></Typography>
              <Typography
                fontSize="18px"
                color="#7E7975"
                padding="20px"
              >
                lorem ipsum dolor sit amet consectetur adipisicing
                elit. cupiditate aspernatur in aut deserunt et,
                accusamus dolorum nostrum tempora nihil atque.
                molestiae recusandae doloremque itaque quis facere
                provident velit, accusantium voluptatibus.
              </Typography>

              <Stack
                spacing={1}
                direction="row"
                marginTop="40px"
                padding="16px"
              >
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.btn}
                >
                  <img src={playstore} />
                  <Box>
                    <Typography className={classes.head}>
                      Get It on
                    </Typography>
                    <Typography className={classes.title}>
                      Google Play
                    </Typography>
                  </Box>
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.btn}
                >
                  <img src={apple} />
                  <Box>
                    <Typography className={classes.head}>
                      Download on
                    </Typography>
                    <Typography className={classes.title}>
                      App Store
                    </Typography>
                  </Box>
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img src={mobile} alt="mobile" height="532" width="600" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DownloadApp;
