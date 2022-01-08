import React from "react";
import { theme } from "../common/theme";
import { createUseStyles } from "react-jss";

export const Bio = () => {
  const classes = useStyles();

  return (
    <div className={classes.bio}>
      <p>
        I am a product nerd, with a passion for design and all things involving people.
        Currently, I work for {" "}
        <a target="_blank" href="https://rexsoftware.com" rel="noreferrer">
          Rex Software
        </a>{" "}
        in Brisbane as an Associate Product Manager where I focus on bringing a strategic product
        view to day-to-day tasks, product discovery, and contributing to the longer-term product strategy.
      </p>
    </div>
  );
};

const useStyles = createUseStyles({
  bio: {
    marginTop: 20,
    color: theme.colors.dark,
    maxWidth: "600px",
    fontSize: 20,
    marginBottom: 50,

    "@media (prefers-color-scheme: dark)": {
      color: theme.colors.offWhite,
    },

    "@media (prefers-color-scheme: light)": {
      color: theme.colors.dark,
    },
  },
});
