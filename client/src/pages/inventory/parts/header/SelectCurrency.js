import React from 'react'
import styles from './SelectCurrency.module.css'

export default function User() {
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        <option value='rub'>₽</option>
        <option value='usd'>$</option>
        <option value='eur'>€</option>
      </select>
    </div>
  )
}
