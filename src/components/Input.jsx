import React,{useId} from 'react'

//useId => hook in react 18 for accessibility purposes

//reusable and accessible Input component.
//in future can be used any where

//React.forwardRef => higher order funcion that allows you
                      //to pass a ref from the parent to 
                      //child component. This is useful when you 
                      //need to access the DOM element of the Input 
                      //from outside of it.

                   


const Input = React.forwardRef(function Input({
    label,//username password etc
    type = "text",//by default
    className = "",
    ...props
},ref){//also pass reference

    const id = useId()//htmlFor for accessibility purposes

    return (
        <div className='w-full'>
            {/*htmlFor links label to input field  by generated ID  */}
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
             </label>
            }

             <input
             type={type}
             className={`px-3 py-2 rounded-lg bg-white 
                text-block outline-none focus:bg-gray-50
                duration-200 border border-gray-200 w-full ${className}`}
             ref = {ref}
             {...props}
             id = {id}
             />
        </div>
    )
})
//common input component
//the ref passed to the input component is forwarded to the underlying Input element


export default Input