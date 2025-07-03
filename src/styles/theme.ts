import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const getAppTheme = (mode: 'light' | 'dark') => {
  let theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#E50914',
      },
      secondary: {
        main: '#FFFFFF',
      },
      background: {
        default: mode === 'dark' ? '#141414' : '#F0F2F5',
        paper: mode === 'dark' ? '#181818' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : '#141414',
        secondary: mode === 'dark' ? '#A0A0A0' : '#505050',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#181818' : '#FFFFFF',
            borderRadius: 8,
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#181818' : '#FFFFFF',
            boxShadow: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'dark' ? '#141414' : '#FFFFFF',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: mode === 'dark' ? '#FFFFFF' : '#141414',
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
}; 