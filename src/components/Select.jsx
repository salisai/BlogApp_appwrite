import React, { useId } from 'react'


const Select = ({
    options,//to select from 
    label,
    className="",
    ...props
},ref) => {
    
  const id = useId()

  return (
    <div className='w-full'>
        {/* label */}
        {label && ( 
            <label 
                htmlFor={id} 
                className="inline-block mb-1 pl-1 text-gray-700 font-medium"
                >
                    {label}
            </label>
        )}

        {/* select */}
        <select 
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white test-black outline-none focus:bg-gray-50 
                duration-200 border border-gray-200 w-full ${className}`}
            >
                {/* what if options have nothing */}
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
        </select>
    </div>
    
  )
}

export default React.forwardRef (Select)
