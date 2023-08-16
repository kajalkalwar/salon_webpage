import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "../Blogs/OurBlogsStyles";
import { OurBlogsData } from "../../data/List";
const OurBlogs = () => {
  const classes = useStyles();
  return (
    <>
      <Box paddingTop="40px" paddingBottom="40px">
        <Box marginBottom="32px">
          <Typography
            fontSize="35px"
            fontWeight="bold"
            textAlign="center"
          >
            Our Blogs
          </Typography>
          <Typography
            borderBottom="6px solid #ebb273"
            margin="0px 700px"
          ></Typography>
        </Box>
        <Box paddingLeft="280px">
          <Grid container spacing={2}>
            {OurBlogsData.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.image}
                    height="250"
                  />
                  <CardContent className={classes.content}>
                    <Box className={classes.boxmonth}>
                      <Typography fontWeight="bold" fontSize="28px">
                        {item.month}
                      </Typography>
                      <Typography fontWeight="bold" fontSize="16px">
                        {item.monthName}
                      </Typography>
                    </Box>
                    <Box marginTop="60px">
                      <Typography
                        fontSize="20px"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontSize="18px"
                        fontWeight="bold"
                        color="#88878f"
                        textAlign="center"
                        marginTop="20px"
                      >
                        {item.paragraph}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OurBlogs;
