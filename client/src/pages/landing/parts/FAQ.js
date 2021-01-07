import React from 'react'
import styles from './FAQ.module.css'

export default function FAQ() {
  return (
    <div className={styles.containerFAQ}>
      <div className={styles.containerFAQ__background}>
        <div className={styles.questions}>
          <h1>Have problems?</h1>
          <ul>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
            <li>Question</li>
          </ul>
        </div>
        <div className={styles.questions__answer}></div>
      </div>
    </div>
  )
}
