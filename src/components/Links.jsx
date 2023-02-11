import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "../common/theme";
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";

export const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.iconBar}>
      <a
        href="https://linkedin.com/in/itslewiswatson"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedinOption className={classes.icon} size={28} />
      </a>
      <a
        href="https://github.com/itslewiswatson"
        target="_blank"
        rel="noreferrer"
      >
        <GrGithub className={classes.icon} size={28} />
      </a>
      <a href="mailto:hello@lewiswatson.me">
        <GrMail className={classes.icon} size={28} />
      </a>
    </div>
  );
};

const useStyles = createUseStyles({
  iconBar: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    borderRadius: 10,
    color: theme.colors.secondary,
    backgroundColor: theme.colors.dark,

    "@media (prefers-color-scheme: dark)": {
      "&:hover": {
        color: theme.colors.secondary,
      },
      color: theme.colors.primary,
      backgroundColor: theme.colors.dark,
    },

    "@media (prefers-color-scheme: light)": {
      "&:hover": {
        color: theme.colors.secondary,
      },
      color: theme.colors.primary,
      backgroundColor: theme.colors.offWhite,
    },

    "&:hover": {
      cursor: "pointer",
    },
  },
});
