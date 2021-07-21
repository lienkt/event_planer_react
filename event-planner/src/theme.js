import {createMuiTheme} from "@material-ui/core";
import orange from '@material-ui/core/colors/orange';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[400]
        },
        type: 'dark',
    },
});