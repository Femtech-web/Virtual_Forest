/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import styles from '../GenStyles'

const btnStyle = (bgColor, color) => {
  return ({
    backgroundColor: `${bgColor}`,
    // minWidth: `${size === 'small' ? '80px' : size === 'normal' ? '160px' : size === 'large' ? '250px' : '100%' }`,
    color: `${color}`
  })
};

const Button = ({ text, color, bgColor, otherStyles, submit, handleClick }) => {
  return (
    <button type={submit ? 'submit' : 'button' }
      className={`${otherStyles} py-2 px-4 hover:opacity-50`}
      style={btnStyle(bgColor, color)}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button