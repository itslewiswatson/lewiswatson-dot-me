import React from "react";
import { theme } from "../common/theme";
import { createUseStyles } from "react-jss";

export const Bio = () => {
  const classes = useStyles();

  return (
    <div className={classes.bio}>
      <div className={classes.child}>
        I'm young, ambitious, and driven, with an unwavering enthusiasm for building great products that resonate with customers.
      </div>
      <div className={classes.child}>
        I'm currently a Product Manager at{" "}
        <a
          target="_blank"
          href="https://rexsoftware.com"
          rel="noreferrer"
          className={classes.link}
        >
          Rex
        </a>{" "}
        where my focus is pioneering product growth through clever strategic initiatives.
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  link: {
    "@media (prefers-color-scheme: dark)": {
      "&:hover": {
        color: theme.colors.secondary,
      },
      color: theme.colors.primary,
    },

    "@media (prefers-color-scheme: light)": {
      "&:hover": {
        color: theme.colors.secondary,
      },
      color: theme.colors.primary,
    },
  },
  bio: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    justifyItems: "center",
    justifySelf: "center",
    width: "100%",

    marginTop: 20,
    color: theme.colors.dark,
    fontSize: 20,
    marginBottom: 50,
    rowGap: '20px',

    "@media (prefers-color-scheme: dark)": {
      color: theme.colors.offWhite,
    },

    "@media (prefers-color-scheme: light)": {
      color: theme.colors.dark,
    },
  },
  child: {
    width: "100%",
  }
});
