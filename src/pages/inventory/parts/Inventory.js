import React from 'react'
import styles from './Inventory.module.css'
import User from './header/User'
import ReturnButton from './header/ReturnButton'
import ChooseGame from './header/ChooseGame'
import CostFilter from './base/CostFilter'
import SortByFilter from './base/SortByFilter'
import Item from './base/Item'

export default function Inventory() {
  return (
    <div className={styles.container}>
      <div className={styles.container__background}>
        <div className={styles.header}>
          <User />
          <div className={styles.buttons}>
            <ReturnButton />
            <ChooseGame />
          </div>
        </div>
        <div className={styles.container__base}>
          <div className={styles.filters}>
            <CostFilter />
            <SortByFilter />
          </div>
          <div>
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  )
}
