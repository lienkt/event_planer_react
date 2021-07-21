import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        background: "black",
        width: "100vw",
        height: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    playButtonContainer: {
        background: theme.palette.grey[600],
        borderRadius: "50%",
        height: 160,
        width: 160
    },
    nowPlayingText: {
        color: theme.palette.grey[600]
    }
}));