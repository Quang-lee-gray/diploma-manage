import React from "react";
import { Input } from "antd";
const InputComponent = ({ size, style, placeholder, name, ...rest }) => {
  return (
    <>
      <Input
        size={size}
        placeholder={placeholder}
        name={name}
        style={style}
        {...rest}
      />
    </>
  );
};

export default InputComponent;
