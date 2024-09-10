import React, { useState } from 'react'
import './Styles/theme.css'

const ToggleDarkMode = () => {

  const[darkTheme,setDarkTheme] = useState(false);

  const themeChange = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  return (
    <div>
      <h1  className='toggle'>ToggleDarkMode</h1>
      <div className='lak'>
      <button className='but' onClick={themeChange}>{darkTheme ? 'Light' : 'Dark'}</button>
      </div>
    </div>
  )
}

export default ToggleDarkMode