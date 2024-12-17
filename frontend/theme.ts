import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Dark mode first
        primary: {
            main: '#90caf9', // Light blue for accents
            dark: '#42a5f5', // Darker blue for open windows with results
            contrastText: '#2c2c2c',
        },
        success: {
            main: '#388e3c',
            dark: '#388e3c',
        },
        error: {
            main: '#8b0000',
            dark: '#8b0000',
        },
        background: {
            default: '#121212', // Dark grey for background
            paper: '#1e1e1e', // Slightly lighter grey for cards/windows
        },
        grey: {
            100: '#ececec', // Medium dark grey for inactive open windows
            800: '#2c2c2c', // Medium dark grey for inactive open windows
            900: '#1b1b1b', // Very dark grey for closed windows
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0bec5', // Subtle grey for hints
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Apply consistent rounded corners
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Modern shadow
                },
            },
        },
    },
});

export default theme;
