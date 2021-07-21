import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    detailsContainer: {
        maxWidth: 1200,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 20,
        paddingBottom: 20
    },
    blockText: {
        maxWidth: 800
    },
    commentBox: {
        minWidth: 800
    },
});