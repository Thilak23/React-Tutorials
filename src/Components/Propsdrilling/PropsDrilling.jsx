import React from 'react'
import ChildA from './ChildA'

const PropsDrilling = () => {
  const course = 'Learning React';
  return (
    <>
    <h1 style={{color : 'red'}}>Props Drilling</h1>
    <h2>Parent Components</h2>
      <ChildA course = {course}/>
    </>
  )
}


export default PropsDrilling