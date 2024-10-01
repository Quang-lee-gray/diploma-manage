import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ type, size, onClick, children }) => {
  return (
    <Button
      type={type}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
