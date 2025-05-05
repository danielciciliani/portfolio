import { useState } from "react";
import Card from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import CtaLink from "./components/CtaLink/CtaLink";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Panda from "./components/Panda/Panda";
import {motion, useScroll} from "motion/react";
import "./index.css";

function App() {

  const {scrollYProgress} = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="bg-main-gradient"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0, 
          right: 0,
          height: 2,
          originX: 0,
        }}
      />
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
