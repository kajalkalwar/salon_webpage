import { makeStyles } from "@mui/styles";
import footerImg from "../../assets/footerImg.png";
export const useStyles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${footerImg})`,
    height: "450px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    marginTop: "100px",
    padding: "0px 20px 20px 20px",
  },

  icon: {
    color: "white",
    backgroundColor: "#353331",
    fontSize: "40px !important",
    padding: "5px",
    marginRight: "20px",
  },
  services: {
    fontSize: "26px !important",
    fontWeight: "bold !important",
    color: "#ffffff",
  },

  border: {
    borderBottom: "6px solid #ebb273",
    width: "50px",
  },

  box: {
    display: "flex",
    color: "#939290",
    padding: "10px 15px",
  },

  title: {
    marginLeft: "20px !important",
    fontWeight: "bold !important",
  },

  details: {
    display: "flex",
    color: "#939290",
    padding: "10px 0px",
  },

  head: {
    marginLeft: "20px !important",
    fontSize: "18px !important",
    fontWeight: "bold !important",
  },

  footer: {
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    fontSize: "22px !important",
    fontWeight: "bold !important",
  },
});
