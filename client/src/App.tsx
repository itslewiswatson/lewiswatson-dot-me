import React from "react";
import { createUseStyles } from "react-jss";
import { theme } from "./common/theme";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.intro}>
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
            people. I currently work for a startup named{" "}
            <a target="_blank" href="https://rooy.co" rel="noreferrer">
              ROOY
            </a>{" "}
            where I focus on productisation of the model.
          </p>
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
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
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
  intro: {},
  hello: {
    color: theme.colors.primary,
    fontSize: 20,
  },
  name: {
    color: theme.colors.offWhite,
    fontSize: "clamp(30px, 6vw, 80px)",
    margin: 0,
    marginTop: 10,
  },
  tagline: {
    color: theme.colors.secondary,
    fontSize: "clamp(30px, 6vw, 80px)",
    margin: 0,
    marginTop: 10,
  },

  bio: {
    marginTop: 20,
    color: theme.colors.secondary,
    maxWidth: "500px",
    fontSize: 18,
  },
});

export default App;
