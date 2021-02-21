import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#73305D',
        },
        secondary: {
            main: '#348AA7',
        },
        error: {
            main: '#FB3640',
        },
        warning: {
            main: '#FFD166',
        },
        info: {
            main: '#30B077',
        },
        success: {
            main: '#30B077',
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#333333",
        },
        background: {
            default: '#F9F1F6'
        }
    },
});

export default theme;
