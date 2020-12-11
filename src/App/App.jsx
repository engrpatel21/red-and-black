import React from "react";
import SideMenu from "../Components/SideMenu";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../Components/Header";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: 'black'
    }
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideMenu />
        <div className={classes.appMain}>
          <Header></Header>
        </div>
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
