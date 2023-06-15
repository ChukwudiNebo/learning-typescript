import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      {/* <input type="text" name="" id="" value={props.value} onChange={props.handleChange}/> */}
      <input
        type="text"
        name=""
        id=""
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
