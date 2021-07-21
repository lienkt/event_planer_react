import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        height: 200,
        width: 140,
        transition: "all 400ms",
        "&:hover": {
            height: 256,
            width: 180
        },
        "&:hover > div": {
            opacity: 100
        }
    },
    img: {
        height: "100%",
        width: "100%"
    },
    box: {
        opacity: 0,
        position: "absolute",
        width: 180,
        bottom: 0,
        padding: theme.spacing(1),
        transition: "all 400ms",
        background: "rgba(0, 0, 0, 0.7)"
    }
}));