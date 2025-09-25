import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props//spread other

}) => {
  return (
    <button
      type={type}
      className={`
        px-5 py-2 
        rounded-full 
        text-sm font-medium
        ${bgColor} ${textColor} 
        hover:opacity-90 
        transition duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
        ${className}
      `}
      {...props}//if more styles..
    >
      {children}
    </button>
  );
};

export default Button;
