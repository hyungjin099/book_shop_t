import React from 'react'
import styles from './Button.module.css'

const Button = ({
  title='버튼', 
  variant='purple', 
  size='small',
  ...props
}) => {
  return (
    <button 
      type='button'
      className={
        `${styles.button} ${styles[variant]} ${styles[size]}`
      }
      {...props}   
    >{title}</button>
  )
}

export default Button





