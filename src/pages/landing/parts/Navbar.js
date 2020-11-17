import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container_navbar}>
      <div className={styles.container__logo}></div>
      <div className={styles.container__links}>
        <ul>
          <li>
            <a>Main</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Have problems?</a>
          </li>
          <li>
            <button className={styles.container__button}>
              <a>Sign in</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
