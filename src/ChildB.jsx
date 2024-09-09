import React from 'react'
import ChildC from './ChildC';

const ChildB = (props) => {
  return (
    <div>
       <h3>Child Component A</h3>
       <ChildC course = {props.course}/>
    </div>
  )
}

export default ChildB