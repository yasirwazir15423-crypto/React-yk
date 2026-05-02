import React from 'react'
import Styles from './header.module.css'
const header = () => {
  return (
    <div className={Styles.header}>
      <h3>yasir khan</h3>
      <button className={Styles.btn}>see more</button>
    </div>
  )
}

export default header
