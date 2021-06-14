import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "./common/theme";
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div>
          <span className={classes.hello}>Hi, my name is</span>
          <h2 className={classes.name}>Lewis Watson.</h2>
          <h3 className={classes.tagline}>
            I'm passionate about building tech for good.
          </h3>
        </div>

        <div className={classes.bio}>
          <p>
            I'm a Brisbane based software developer with a keen interest in
            product. I have a passion for design and all things involving
            people. I currently work for{" "}
            <a target="_blank" href="https://rooy.co" rel="noreferrer">
              ROOY
            </a>{" "}
            where I focus on designing and building brilliant products for
            forward-thinking organisations.
          </p>
        </div>

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
    height: "100vh",

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
    maxWidth: 1000,

    [`@media (max-width: 1080px)`]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
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

  iconBar: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },

  icon: {
    borderRadius: 10,
    color: theme.colors.primary,
    backgroundColor: theme.colors.dark,

    "@media (prefers-color-scheme: dark)": {
      color: theme.colors.primary,
      backgroundColor: theme.colors.dark,
    },

    "@media (prefers-color-scheme: light)": {
      color: theme.colors.primary,
      backgroundColor: theme.colors.offWhite,
    },

    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default App;
