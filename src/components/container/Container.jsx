import React from 'react'

//container => like a box, styling properties
const Container = ({children}) => {
  return <div className='w-full max-w-7xl mx-auto px-4 '>
         {children}</div>;
  
}
//if we need 80% width then in all elements then shift into container
//if I want to change the background come and change here 

export default Container