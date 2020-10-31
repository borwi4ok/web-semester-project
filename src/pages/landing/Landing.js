import React from 'react'
import './Landing.css'
import Main from './parts/Main'
import AboutUs from './parts/AboutUs'
import FAQ from './parts/FAQ'

export default function Landing() {
  return (
    <div className='wrapper'>
      <Main />
      <FAQ />
      <AboutUs />
    </div>
  )
}
