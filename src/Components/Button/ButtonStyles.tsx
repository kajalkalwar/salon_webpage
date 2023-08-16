import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  box: { width: "460px", padding: "32px" },

  stack: {
    backgroundColor: "#f9f3ec",
  },

  btnGroup: {
    width: "100%",
  },

  btn1: {
    width: "100%",
    border: "none !important",
    padding: "15px !important",
    color: "#333333",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "black !important",
      color: "#ffffff",
    },
  },
});
