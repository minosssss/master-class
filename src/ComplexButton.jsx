// ComplexButton.jsx
import React, { useState } from "react";

const ComplexButton = ({ children, onClick, disabled, ...props }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (!disabled) {
      setCount(count + 1);
      onClick && onClick();
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={disabled} {...props}>
        {children} (Clicked {count} times)
      </button>
    </>
  );
};

export default ComplexButton;
