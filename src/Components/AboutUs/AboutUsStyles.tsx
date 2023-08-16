import { makeStyles } from "@mui/styles";
import bg from "../../assets/bg.png";
export const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${bg})`,
    height: "690px",
  },
  heading: {
    textTransform: "uppercase",
    color: "#e7a356",
    fontWeight: "bold !important",
    fontSize: "20px !important",
    marginBottom: "8px !important",
  },
  para: {
    fontSize: "35px !important",
    fontWeight: "bold !important",
  },

  para2: {
    color: "#88878F",
    fontSize: "18px !important",
    margin: "32px 0px !important",
  },
});
