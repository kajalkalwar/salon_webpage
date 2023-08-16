import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  content: {
    position: "relative",
    "&:hover": {
      boxShadow: "2px 2px 10px gray !important",
    },
  },

  boxmonth: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: " #ebb273",
    backgroundColor: "#000000",
    height: "85px",
    width: "67px",
    borderRadius: "10px",
    position: "absolute",
    left: "110px",
    top: "-45px",
  },
});
