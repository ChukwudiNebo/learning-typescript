import React from "react";

type ButtonProps = {
  // what is the type of event react mouseevent...we can be specific by adding htmlbuttonelement
  handleClick: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={(event)=>props.handleClick(event,1)}>click</button>;
};

export default Button;
