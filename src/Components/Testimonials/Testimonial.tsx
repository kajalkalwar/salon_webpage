import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from "../../data/List";
import { useStyles } from "../Testimonials/TestimonialStyles";
import { Box, Paper, Typography } from "@mui/material";
import "./Testimonial.css";

const Testimonial = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box
        margin="110px 0px 0px"
        paddingTop="40px"
        className={`${classes.mainContainer} testimonial-arrow`}
      >
        <Box>
          <Typography
            fontSize="35px"
            fontWeight="bold"
            textAlign="center"
            color="white"
          >
            Testimonials
          </Typography>
          <Typography
            borderBottom="6px solid #000000"
            margin="0px 700px"
          ></Typography>
        </Box>
        <Box className={classes.box}>
          <Paper className={classes.paperContainer}>
            <Typography fontSize="18px" fontWeight="bold">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
              laborum sunt aliquam cum. dignissimos id quod quas aut
              aperiam perferendis, a quaerat! incidunt non culpa fugit
              voluptas esse. exercitationem, vitae laboriosam.
            </Typography>
          </Paper>
          <Paper className={classes.paperContainer}>
            <Typography fontSize="18px" fontWeight="bold">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
              laborum sunt aliquam cum. dignissimos id quod quas aut
              aperiam perferendis, a quaerat! incidunt non culpa fugit
              voluptas esse. exercitationem, vitae laboriosam.
            </Typography>
          </Paper>
        </Box>

        <Box padding="0px 120px">
          <Slider {...settings}>
            {TestimonialData.map((item) => (
              <Box key={item.id}>
                <Box className={classes.profileDetails}>
                  <img src={item.image} alt="profile" />
                  <Box className={classes.abc}>
                    <Typography fontSize="24px" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography
                      fontSize="18px"
                      color="#7d7a76"
                      fontWeight="bold"
                    >
                      {item.head}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
