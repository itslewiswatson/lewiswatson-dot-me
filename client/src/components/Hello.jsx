import React from "react";
import { theme } from "../common/theme";
import { createUseStyles } from "react-jss";

export const Hello = () => {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.hello}>Hello, my name is</span>
      <h2 className={classes.name}>Lewis Watson.</h2>
      <h3 className={classes.tagline}>
        I'm passionate about building tech for good.
      </h3>
    </div>
  );
};

const useStyles = createUseStyles({
  hello: {
    color: theme.colors.primary,
    fontSize: 22,
  },
  name: {
    color: theme.colors.offWhite,
    fontSize: "clamp(30px, 5vw, 80px)",
    margin: 0,
    marginTop: 10,

    "@media (prefers-color-scheme: dark)": {
      color: theme.colors.offWhite,
    },

    "@media (prefers-color-scheme: light)": {
      color: theme.colors.dark,
    },
  },
  tagline: {
    color: theme.colors.secondary,
    fontSize: "clamp(30px, 5vw, 80px)",
    margin: 0,
    marginTop: 10,
  },
});
