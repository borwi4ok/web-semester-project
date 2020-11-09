import React from 'react'
import styles from './ReturnButton.module.css'

export default function ReturnButton() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <span>Back to main page</span>
      </button>
    </div>
  )
}
