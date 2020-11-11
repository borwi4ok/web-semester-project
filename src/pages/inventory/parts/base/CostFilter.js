import React from 'react'
import styles from './CostFilter.module.css'

export default function CostFilter() {
  return (
    <div className={styles.container}>
      <span>Cost</span>
      <div className={styles.wrapper}>
        <div>
          <label htmlFor='from'>from</label>
          <input id='from' type='number' defaultValue='0'></input>
        </div>
        <div>
          <label htmlFor='to'>to</label>
          <input id='to' type='number' defaultValue='99999'></input>
        </div>
      </div>
    </div>
  )
}
