import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.background.default,
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
    },
    flexGrow: {
        flexGrow: 1,
    },
}));