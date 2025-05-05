import { useState } from "react";
import Card from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import CtaLink from "./components/CtaLink/CtaLink";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Panda from "./components/Panda/Panda";

function App() {
  return (
    <>
      <div className="font-lato w-screen h-full">
        <div className="w-11/12 mx-auto sm:w-9/12 lg:w-7/12">
          <div className="flex flex-col gap-10 pt-10">
            <Card>
              <Profile></Profile>
            </Card>
            <Panda></Panda>
            <CtaLink></CtaLink>
            <Card>
              <Experience></Experience>
            </Card>
            <Card>
              <Projects></Projects>
            </Card>
            <Card>
              <AboutMe></AboutMe>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
