import React from "react";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {useStyles} from "./styles";
import {ButtonBase, Typography} from "@material-ui/core";

export function MoviePlayer({isWatched, setIsWatched}) {
    const {container, playButtonContainer, nowPlayingText} = useStyles();
    return (
        <div className={container}>
            {!isWatched && (
                <ButtonBase onClick={() => setIsWatched(true)}>
                    <PlayCircleFilledIcon className={playButtonContainer}/>
                </ButtonBase>
            )}

            {isWatched && (
                <Typography variant="h3" className={nowPlayingText}>
                    Now Playing...
                </Typography>
            )}
        </div>
    )
}