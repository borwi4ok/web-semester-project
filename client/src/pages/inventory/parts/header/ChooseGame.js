import React from 'react'
import styles from './ChooseGame.module.css'

export default function ChooseGame() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <span>Choose game</span>
      </button>
    </div>
  )
}
