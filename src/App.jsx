import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import CtaLink from "./components/CtaLink/CtaLink";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Panda from "./components/Panda/Panda";
import Scroll from "./utils/Animations/Scroll";
import FadeIn from "./utils/Animations/FadeIn";
import FadeInFromBottom from "./utils/Animations/FadeInFromBottom";
import Contact from "./components/Contact/Contact";
import { ContactLink, Links } from "./utils/LinksData";
import Navbar from "./components/Navbar/Navbar";

import "./index.css";

function App() {
  const links = Links;
  const contactLink = ContactLink;

  return (
    <>
      <div>
        <Scroll></Scroll>
        <div className="font-lato w-screen h-full scroll-smooth transition-colors duration-500">
          <Navbar></Navbar>
          <div className="w-11/12 mx-auto sm:w-9/12 lg:w-8/12 2xl:w-7/12">
            <div className="flex flex-col gap-10 pt-30 pb-10">
              <FadeIn duration={1.5}>
                <Card>
                  <Profile></Profile>
                </Card>
              </FadeIn>
              <Panda></Panda>
              <CtaLink links={links}></CtaLink>
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
              <FadeIn once={false}>
                <Card>
                  <Contact>
                    <CtaLink links={contactLink}></CtaLink>
                  </Contact>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
