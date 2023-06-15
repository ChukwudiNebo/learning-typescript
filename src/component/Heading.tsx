import React from 'react'

type HeadingProps ={
    children:string
}

const Heading = (props:HeadingProps) => {
  return (
    <>
      <h5>
        {props.children}
      </h5>
    </>
  )
}

export default Heading
