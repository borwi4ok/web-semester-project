import React from 'react'
import styles from './Landing.module.css'
import Main from './parts/Main'
import AboutUs from './parts/AboutUs'
import FAQ from './parts/FAQ'

export default function Landing() {
  return (
    <div className={styles.wrapper}>
      <Main />
      <FAQ />
      <AboutUs />
    </div>
  )
}
