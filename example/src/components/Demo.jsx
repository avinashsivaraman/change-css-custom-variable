import React from 'react'
import './Demo.css'

const Demo = () => {
  const handleClick = () => {
    const Box = document.querySelector('.box')
    Box.classList.toggle('roll')
  }
  const handleChange = (e) => {
    console.log(e)
  }
  return (
    <div className='app'>
      <div className='demo'>
        <div className='box'></div>
      </div>
      <div className='control'>
        <button onClick={handleClick}> Start Rolling </button>
        <div className='control-input'>
          <label htmlFor="input">
            Control the animation speed
          </label>
          <button id='up' onClick={handleChange}>
            Up
          </button>
          <button id='down' onClick={handleChange}>
            Down
          </button>
        </div>
      </div>
    </div>
  )
}

export default Demo
