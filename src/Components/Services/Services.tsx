import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from "../Services/ServicesStyles";
import { ServicesData } from "../../data/List";
import "./services.css";

const Services = () => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 2000,
    autoplaySpeed: 1000,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <>
      <Box className={`${classes.abc} banner-dots`}>
        <Typography className={classes.heading}>
          Our Best Services
        </Typography>
        <Typography
          borderBottom="6px solid #ebb273"
          margin="0px 579px"
        ></Typography>
        <Slider {...settings}>
          {ServicesData.map((item) => (
            <Box
              padding="40px 10px"
              key={item.id}
              className="service-details"
            >
              <img src={item.image} height="440" width="330" />
              <Box className={classes.head}>
                <Typography className="content">
                  {item.heading}
                </Typography>
                <Box className="overlay"></Box>
                <Box className="desc">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img src={item.img1} height="40px" />
                  </Box>
                  <Typography className="service-head">
                    {item.heading}
                  </Typography>
                  <Typography className="service-para">
                    {item.para}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Services;
