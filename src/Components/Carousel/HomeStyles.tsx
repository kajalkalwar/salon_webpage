//@ts-nocheck
import { makeStyles } from "@mui/styles";
import Rectangle6 from "../../assets/Rectangle6.png";
export const useStyles = makeStyles({
  Container: {
    backgroundImage: `url(${Rectangle6})`,
    backgroundColor: "#171718",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "400px",
    width: "1320",
    padding: "28px 28px 28px 28px",
    borderRadius: "15px",
  },

  carouselData: {
    display: "flex !important",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    height: "362px",
    width: "459px",
    marginTop: "10px",
    marginRight: "40px",
  },

  heading: {
    color: "#ffffff !important",
    marginLeft: "50px",
  },

  head: {
    fontWeight: "bold !important",
    fontSize: "35px !important",
  },

  para: {
    marginTop: "12px ! important",
    fontSize: "22px !important",
    color: "#ffffff",
    opacity: "0.6",
  },

  btn: {
    marginTop: "25px !important",
    color: "#fff !important",
    textTransform: "capitalize !important",
    padding: "15px 50px !important",
    fontSize: "18px !important",
    fontWeight: "bold !important",
    border: "2px solid #e7a356 !important",
    "&:hover": {
      backgroundColor: "#e7a356 !important",
    },
  },
});
