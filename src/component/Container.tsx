 import React from 'react'
 
// passing style as prop 
type ContainerProps={
    styles:React.CSSProperties
}

 const Container = (props:ContainerProps) => {
   return (
     <div>
       <div style={props.styles}>
        I Love YOU
       </div>
     </div>
   )
 }
 
 export default Container
 