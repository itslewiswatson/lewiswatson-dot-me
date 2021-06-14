import React from "react";
import { Hello } from "../components/Hello";
import { Bio } from "../components/Bio";
import { Links } from "../components/Links";

export const Home = () => {
  return (
    <>
      <Hello />
      <Bio />
      <Links />
    </>
  );
};
