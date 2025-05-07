import { useState } from "react";
import Card from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import CtaLink from "./components/CtaLink/CtaLink";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Panda from "./components/Panda/Panda";
import "./index.css";
import Scroll from "./utils/Animations/Scroll";
import FadeIn from "./utils/Animations/FadeIn";
import FadeInFromBottom from "./utils/Animations/FadeInFromBottom";

function App() {
  return (
    <>
      <Scroll></Scroll>
      <div className="font-lato w-screen h-full scroll-smooth">
        <div className="w-11/12 mx-auto sm:w-9/12 lg:w-7/12">
          <div className="flex flex-col gap-10 pt-10 pb-10">
            <FadeIn duration={1.5}>
              <Card>
                <Profile></Profile>
              </Card>
            </FadeIn>
            <Panda></Panda>
            <CtaLink></CtaLink>
            <FadeInFromBottom duration={1.5}>
              <Card>
                <Experience></Experience>
              </Card>
            </FadeInFromBottom>
            <FadeInFromBottom duration={1.5}>
              <Card>
                <Projects></Projects>
              </Card>
            </FadeInFromBottom>
            <FadeInFromBottom duration={1.5}>
              <Card>
                <AboutMe></AboutMe>
              </Card>
            </FadeInFromBottom>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
