import React from 'react'
import styles from './Item.module.css'

export default function Item() {
  return (
    <div className={styles.container}>
      <div className={styles.imageCost}>
        <span>1200$</span>
      </div>
      <span className={styles.itemName}>great sage's reconing</span>
    </div>
  )
}
