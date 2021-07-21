import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Grid, LinearProgress, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../../pages/App/styles";
import {LOCALSTORAGE_TOKEN_KEY} from "../../services/axios";
import {fetchProfile, signIn} from "../../services/auth";

export function SignInCard({setProfile}) {
    const {root, fullWidth} = useStyles();
    const [errorMessage, setError] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
        if (!token) {
            setIsLoading(false);
            return;
        }

        fetchProfile()
            .then(profile => {
                setProfile(profile);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
                localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
            });
    }, []);

    function onSignInClick() {
        setIsLoading(true);
        signIn(username, password)
            .then(({token}) => {
                localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
                return fetchProfile();
            })
            .then(profile => {
                setProfile(profile);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            });
    }

    return (
        <Card className={root}>
            {isLoading && <LinearProgress/>}
            <CardContent>
                <Grid container spacing={4} direction="column" alignItems="stretch">
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="h1"
                            align="left"
                            color="primary"
                        >
                            Sign in 
                        </Typography>
                    </Grid>

                    {errorMessage && (
                        <Grid item>
                            <Typography variant="subtitle2" color="error">
                                {errorMessage}
                            </Typography>
                        </Grid>
                    )}

                    <Grid item>
                        <TextField
                            fullWidth
                            label="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className={fullWidth}
                            disabled={isLoading}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className={fullWidth}
                            disabled={isLoading}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    onSignInClick()
                                }
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Button className={fullWidth}
                                size="medium"
                                variant="contained"
                                color="primary"
                                disabled={isLoading}
                                onClick={onSignInClick}>
                            Sign in
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={fullWidth} size="small" variant="text">
                            Don't have an account? Sign up
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}