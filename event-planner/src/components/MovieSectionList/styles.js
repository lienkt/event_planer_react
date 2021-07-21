import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        position: "relative",
        width: "100%"
    },
    moviesGridContainer: {
        overflowX: "auto",
        overflowY: "hidden",
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        width: "100%"
    }
}));