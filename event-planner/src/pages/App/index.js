import {useStyles} from "./styles";
import {useState} from "react";
import {SignInCard} from "../../components/SignInCard";
import {CardPage} from "../CardPage";
import {AppBar, Button, ButtonBase, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {MoviePage} from "../MoviePage";
import {HomePage} from "../HomePage";

export function App() {
    const {container, flexGrow} = useStyles();
    const [profile, setProfile] = useState(undefined);
    const [activeMovie, setActiveMovie] = useState(undefined);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        handleClose();
        localStorage.clear();
        setProfile(undefined);
        setActiveMovie(undefined);
    }

    return (
        <div className={container}>
            {!profile && (
                <CardPage>
                    <SignInCard setProfile={setProfile}/>
                </CardPage>
            )}

            {profile && (
                <AppBar position="static" variant="outlined">
                    <Toolbar>
                        <ButtonBase onClick={() => setActiveMovie(undefined)}>
                            <Typography variant="h6">
                                The MoviesDB® by Keith Tan
                            </Typography>
                        </ButtonBase>

                        <div className={flexGrow}/>

                        <Button color="inherit" onClick={handleClick}>
                            {profile.name}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            )}

            {activeMovie && <MoviePage movie={activeMovie}/>}
            {!activeMovie && <HomePage profile={profile} setActiveMovie={setActiveMovie}/>}
        </div>
    );
}