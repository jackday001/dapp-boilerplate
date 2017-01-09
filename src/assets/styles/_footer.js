import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    minHeight: theme.spacing(8),
    background: `${theme.custom.footer} !important`,
    boxShadow: `${theme.custom.boxShadow} !important`,
  },
}));
export default useStyles;
