import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "./common/theme";
import { Home } from "./views/Home";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <Home />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  "@global": {
    body: {
      backgroundColor: theme.colors.dark,
      fontFamily: "Helvetica, sans-serif",

      "@media (prefers-color-scheme: dark)": {
        backgroundColor: theme.colors.dark,
      },

      "@media (prefers-color-scheme: light)": {
        backgroundColor: theme.colors.offWhite,
      },
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "10vh",

    paddingLeft: 150,
    paddingRight: 150,

    [`@media (max-width: 768px)`]: {
      paddingLeft: 50,
      paddingRight: 50,
    },

    [`@media (max-width: 480px)`]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  content: {
    margin: "0 auto",
    maxWidth: 800,

    [`@media (max-width: 1080px)`]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
});

export default App;
