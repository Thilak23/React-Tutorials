import React from 'react'

const Comp2 = (props) => {
  console.log(props.name)
  console.log(props.age)
  return (
    <div>
      <h1 style={{color : 'red'}}>Props</h1>
      <div>Username : {props.name}</div>
      <div>Age : {props.age}</div>
      <div>Country : Brazil</div>
      <div>Club : {props.club}</div>
    </div>
  )
}

export default Comp2