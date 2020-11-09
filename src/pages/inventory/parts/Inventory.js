import React from 'react'
import styles from './Inventory.module.css'
import User from './header/User'
import ReturnButton from './header/ReturnButton'
import ChooseGame from './header/ChooseGame'

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
        {/* middle part */}
        <div>
          {/* filters */}
          {/* <div>
          <CostFilter />
          <SortByFilter />
        </div> */}
          {/* items */}
          {/* <div>
          <Item />
          <Item />
          <Item />
        </div> */}
        </div>
      </div>
    </div>
  )
}
