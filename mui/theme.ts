'use client';
import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';
import * as constants from './constants';

export default createTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    secondary: {
      main: '#2196f3',
    },
    error: {
      main: red.A400,
    },
  },
  
  typography: {
    h1: {
      fontSize: constants.h1.fontSize,
    },
    fontFamily: constants.global.fontFamily,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        li: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          listStyle: 'none',
          textDecoration: 'none',
        }
      }
    }

  }
});
