import React from 'react'
import ChildB from './ChildB';

const ChildA = (props) => {
  return (
    <div>
       <h3>Child Component A</h3>
       <ChildB course = {props.course}/>
    </div>
  )
}

export default ChildA