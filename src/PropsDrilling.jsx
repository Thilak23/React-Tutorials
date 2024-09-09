import React from 'react'
import ChildA from './ChildA'

const PropsDrilling = () => {
  const course = 'Learning React';
  return (
    <>
     <h2>Parent Components</h2>
      <ChildA course = {course}/>
    </>
  )
}


export default PropsDrilling