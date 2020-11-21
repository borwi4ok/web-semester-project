import React, { useState } from 'react'
import styles from './Navbar.module.css'
import User from './User'

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <ul className={styles.links__ul}>
          <div>
            <li>
              <a>Main</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Have problems?</a>
            </li>
          </div>
          {isAuth ? (
            <User />
          ) : (
            <button className={styles.container__button}>
              <a> Sign in </a>
            </button>
          )}
        </ul>
      </div>
    </div>
  )
}
