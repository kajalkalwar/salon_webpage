//@ts-nocheck
import { Opacity } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import makeup from "../../assets/makeup.png";
export const useStyles = makeStyles({
  backImage: {
    // backgroundImage: `url(${makeup})`,
    // position: "absolute",
    // height: "500px",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // zIndex: "1",
    // opacity: "0.8",

    position: "relative",
    zIndex: "1",
  },
  boxImage: {
    position: "relative",
    opacity: "0.2",
  },

  grid: {
    position: "absolute",
    zIndex: "3",
    opacity: "3",
    top: "50px",
  },

  btn: {
    backgroundColor: "#272522 !important",
    padding: "8px 16px !important",
  },

  head: {
    textTransform: "capitalize",
    fontSize: "14px !important",
    fontWeight: "bold !important",
    textAlign: "start !important",
    paddingLeft: "10px",
  },

  title: {
    textTransform: "capitalize",
    fontSize: "22px !important",
    fontWeight: "bold !important",
    paddingLeft: "10px",
  },
});
