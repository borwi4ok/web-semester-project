import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (

            <div className={styles.container_navbar} >
                <div className={styles.container__logo}>
                    <img src='C:\Users\ComradAlex\PhpstormProjects\web-semester-project\src\pages\landing\media\logo.png'/>
                </div>
                <div className={styles.container__links}>
                    <a>Main</a>
                    <a>About us</a>
                    <a>Have problems?</a>
                    <button className={styles.container__button}>
                        <a>Sign in</a>
                    </button>
                </div>
            </div>
    )
}