import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from "./HomeStyles";
import { CarouselData } from "../../data/List";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./carousel.css";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Home = () => {
  const classes = useStyles();
  // const [currentIndex, setCurrentIndex] = useState(0);

  // console.log(currentIndex);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(CarouselData);

  // const arrowBackBtn = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide
  //     ? CarouselData.length - 1
  //     : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const arrowForwardBtn = () => {
  //   const isLastSlide = currentIndex === CarouselData.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <Box marginTop="120px" marginRight="80px" marginLeft="80px">
      <Box className={`${classes.Container} banner-carousel`}>
        <Slider {...settings}>
          {CarouselData?.map((item) => (
            <Box key={item.id} className={classes.carouselData}>
              {/* <Box
                onClick={() => arrowBackBtn()}
                className={classes.arrowBack}
              >
                <ArrowBackIos />
              </Box>
              <Box
                className={classes.arrowForward}
                onClick={() => arrowForwardBtn()}
              >
                <ArrowForwardIos />
              </Box> */}
              <Box className={classes.heading}>
                <Typography className={classes.head}>
                  {item.heading}
                </Typography>
                <Typography className={classes.para}>
                  {item.para}
                </Typography>

                <Button className={classes.btn} variant="outlined">
                  {item.buttonText}
                </Button>
              </Box>

              <img
                src={item.image}
                alt="image1"
                className={classes.image}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Home;
