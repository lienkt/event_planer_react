import React from "react";
import {Box, ButtonBase, Paper, Typography} from "@material-ui/core";
import {useStyles} from "./styles";

export function MoviePosterButton({movie: {photoUrl, _id, title}, onClick}) {
    const {container, img, box} = useStyles();

    return (
        <Paper elevation={5}>
            <ButtonBase className={container} onClick={onClick}>
                <img className={img} src={photoUrl} alt={title}/>

                <Box className={box}>
                    <Typography variant="subtitle1" color="textPrimary" align="left">
                        {title}
                    </Typography>
                </Box>

            </ButtonBase>
        </Paper>
    );
}