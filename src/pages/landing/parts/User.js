import React from 'react'
import styles from './User.module.css'

export default function User() {
  return (
    <div className={styles.containerUser}>
      <div className={styles.containerUser__info}>
        <span>SignedName</span>
        <span>25$</span>
      </div>
      <div className={styles.avatar}></div>
    </div>
  )
}
