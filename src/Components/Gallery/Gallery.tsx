import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Gallery/GalleryStyles";
import { GalleryData } from "../../data/List";
const Gallery = () => {
  const classes = useStyles();
  return (
    <>
      <Box paddingTop="60px">
        <Box margin="20px 0px">
          <Typography className={classes.title}>
            Salon Gallery
          </Typography>
          <Typography
            borderBottom="6px solid #ebb273"
            margin="0px 650px"
          ></Typography>
        </Box>
        <Grid container maxWidth="lg" marginLeft="110px" spacing={2}>
          {GalleryData.map((item) => (
            <Grid item sm={4}>
              <Box>
                <img src={item.image} height="248" width="388" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Gallery;
