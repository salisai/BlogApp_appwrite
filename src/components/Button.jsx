import React from 'react'

const Button = ({//parameters and give some default values, if want to give new values then override it
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',//why blank => 
    ...props//aur bhi properties, how many properties you give can get here
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} 
    ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
//forwardRef => its example 
//the components you make separately you don't keep state there in there
  
//reduxUI