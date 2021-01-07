import React from 'react'
import styles from './SortByFilter.module.css'

export default function SortByFilter() {
  return (
    <div className={styles.container}>
      <span>Sort By</span>
      <div className={styles.wrapper}>
        <div>
          <select>
            {/* Посмотреть по каким критериям ещё можно сортировать */}
            <option>Low price &#129047;</option>
            <option>High price &#129045;</option>
            <option>Name</option>
            <option>name</option>
          </select>
        </div>
      </div>
    </div>
  )
}
