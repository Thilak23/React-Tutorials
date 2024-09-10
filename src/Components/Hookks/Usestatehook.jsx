import React from 'react'
import {useState} from 'react'

const Usestatehook = () => {
  const[count,setCount] = useState(1);

  const updateCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 style={{color : 'red'}}>Usestae Hook</h1>
      Count : {count} <button onClick={updateCount}>+</button>
    </div>
  )
}

export default Usestatehook