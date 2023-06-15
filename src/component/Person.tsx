import React from 'react'
import { PersonProps } from './Person.types'

const Person = (props:PersonProps) => {
  return (
    <>
      <div>
        {props.name.first } is a {props.name.last}
      </div>
    </>
  )
}

export default Person
