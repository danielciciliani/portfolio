import { useState } from 'react'
import Card from './components/Card/Card'
import Profile from './components/Profile/Profile'
import CtaLink from './components/CtaLink/CtaLink'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'

function App() {



  return (
    <>
    <div className="w-screen h-[100%] bg-gradient-to-br from-[#1D1D1D] to-[#1D1A2B]">
      <div className="w-11/12- w-[90%] mx-auto">
        <div className="flex flex-col gap-10 pt-10">
          <Card>
            <Profile></Profile>
          </Card>
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
  )
}

export default App