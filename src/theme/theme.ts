import { createTheme } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    h1: { fontSize: 60, fontWeight: 900, color: "#9E78CF" },
    h2: { color: "#FD4312", fontSize: 36, fontWeight: 900 },
    h3: { fontSize: 24, fontWeight: 700, color: "#FFFEFEF2" },
    subtitle1: { fontSize: 24, fontWeight: 700, color: "#FFFEFEF2" },
    subtitle2: { fontSize: 16, color: "#F2F4F5", fontWeight: 600 },
    body1: { fontSize: 18, color: "#9E78CF", fontWeight: 500 },
    body2: { fontSize: 17, color: "red", fontWeight: 700 },
    fontFamily: '"dana",  "sans-serif"',
  },
  palette: {
    primary: { main: "#9E78CF" },
    secondary: { main: "#fff" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'dana';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:  url(/fonts/danaRegular.woff) format('woff');
        }

        @font-face {
          font-family: 'dana';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url(/fonts/danaMedium.woff) format('woff');
          }

          @font-face {
            font-family: 'dana';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src:  url(/fonts/danaBold.woff) format('woff');
          }
          @font-face {
            font-family: 'dana';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src:  url(./fonts/danaExtrabold.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src:  url(/fonts/DanaFaNum-Regular.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src:  url(/fonts/DanaFaNum-Medium.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 800;
            src:  url(/fonts/DanaFaNum-Bold.woff) format('woff');
          }
          @font-face {
            font-family: 'dana-fa';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src:  url(/fonts/DanaFaNum-ExtraBold.woff) format('woff');
          }

         
          
      `,
    },
  },
});
