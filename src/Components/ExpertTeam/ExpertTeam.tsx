import React from "react";
import { useStyles } from "../ExpertTeam/ExpertTeamStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExpertTeamData } from "../../data/List";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ExpertTeam.css";

const ExpertTeam = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <Box paddingTop="120px" className="team-arrow">
      <Box marginBottom="72px">
        <Typography
          fontSize="35px"
          fontWeight="bold"
          textAlign="center"
        >
          Our Expert Team
        </Typography>
        <Typography
          borderBottom="6px solid #ebb273"
          margin="0px 600px"
        ></Typography>
      </Box>
      <Box marginLeft="120px" marginRight="120px" padding="0px 34px">
        <Slider {...settings}>
          {ExpertTeamData.map((item) => (
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia}>
                <img src={item.image} height="284" width="280" />
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom className={classes.title}>
                  {item.heading}
                </Typography>
                <Typography className={classes.para}>
                  {item.paragraph}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ExpertTeam;
