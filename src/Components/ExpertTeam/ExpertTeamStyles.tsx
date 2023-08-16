import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  card: {
    width: "364px !important",
    "&:hover": {
      backgroundColor: "#e3ac73 !important",
    },
  },

  cardMedia: {
    margin: "0px 39px",
  },

  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff2e4",
    "&:hover": {
      backgroundColor: "#000000 !important",
      color: "#ffffff !important",
    },
  },

  title: {
    fontSize: "18px !important",
    fontWeight: "bold !important",
  },

  para: {
    fontSize: "14px !important",
    fontWeight: "bold !important",
    color: "#88878f",
    "&:hover": {
      color: "#ffffff !important",
    },
  },
});
