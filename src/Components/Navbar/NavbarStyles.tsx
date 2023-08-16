//@ts-nocheck
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  app: { backgroundColor: "#ffffff !important" },
  list: {
    fontSize: "18px",
    marginLeft: "90px",
  },
  btn: {
    color: "#000000 !important",
    fontWeight: "bold",
    cursor: "pointer",
    "&:active": {
      color: "#e7a356 !important",
    },
  },

  // ------------------------------------
  btn2: {
    backgroundColor: "#272522 !important",
    color: "#e7a356 !important",
    textTransform: "capitalize !important",
    textDecoration: "underline !important",
    fontSize: "18px !important",
    width: "150px",
    height: "50px",
  },
});
