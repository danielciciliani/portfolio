import { useState } from 'react'
import viteLogo from '/vite.svg'
import profilePicture from '/profile_picture_1.PNG'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className="card">
        <div className="image">
            <div className="image_wrapper">
              <img className='image_profile' src={profilePicture} alt="" />
            </div>
          </div>
          <h1>Hey, I'm Daniel Ciciliani</h1>
          <div className="intro">
            <p>I am a frontend developer with more than 3 years of experience</p>
            <p>I'm lucky that coding brings together the most I like: 
            logic, problem-solving, computers, innovation and making things look good.
            </p>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
