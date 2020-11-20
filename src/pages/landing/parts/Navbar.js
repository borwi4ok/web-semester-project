import React from 'react'
import styles from './Navbar.module.css'
import User from "./User";

export default function Navbar() {
  return (
    <div className={styles.container_navbar}>
      <div className={styles.container__logo}></div>
      <div className={styles.container__links}>

              <a>Main</a>
              <a>About us</a>
              <a>Have problems?</a>
              <button className={styles.container__button}>
                  <a> Sign in </a>
              </button>

      </div>
    </div>
  )
}
