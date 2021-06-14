import React from "react";
import { theme } from "../common/theme";
import { createUseStyles } from "react-jss";

export const Bio = () => {
  const classes = useStyles();

  return (
    <div className={classes.bio}>
      <p>
        I'm a Brisbane based software developer with a keen interest in product.
        I have a passion for design and all things involving people. I currently
        work for{" "}
        <a target="_blank" href="https://rooy.co" rel="noreferrer">
          ROOY
        </a>{" "}
        where I focus on designing and building brilliant products for
        forward-thinking organisations.
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
