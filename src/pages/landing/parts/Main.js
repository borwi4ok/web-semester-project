import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='containerMain'>
      <div className='wrapperImages'>
        <div className='wrapperImages__left'></div>
        <div className='wrapperImages__right'></div>
      </div>
      <div className='tableOfUsers'>
        <div className='tableOfUsers__headlines'>
          <span>Nickname</span>
          <span>COST</span>
        </div>
        {/* Добавить li-component */}
        <ul className='listOfUsers'>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
