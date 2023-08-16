import { makeStyles } from "@mui/styles";
import bgtTestimonial from "../../assets/bgtTestimonial.png";

export const useStyles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${bgtTestimonial})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "650px",
  },

  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paperContainer: {
    padding: "34px",
    width: "530px",
    height: "200px",
    margin: "40px",
    color: "#88878f !important",
    "&:hover": {
      backgroundColor: "#000000 !important",
    },
  },

  profileDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px 0px",
  },

  abc: {
    marginLeft: "20px !important",
  },
});
