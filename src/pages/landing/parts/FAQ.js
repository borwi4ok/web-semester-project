import React from 'react'
import './FAQ.css'

export default function FAQ() {
  return (
    <div className='containerFAQ'>
      <div className='containerFAQ__background'>
        <div className='questions'>
          <h1>Have problems?</h1>
          <ul>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
          </ul>
        </div>
        <div className='questions__answer'></div>
      </div>
    </div>
  )
}
