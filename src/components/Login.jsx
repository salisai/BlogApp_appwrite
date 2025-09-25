import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as storeLogin} from "../features/authSlice"
import {Button, Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import { useForm } from 'react-hook-form'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")


    const login = async (data)=>{
        setError("")
        
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData));
                navigate("/")//to root
            }
        }catch(err){
            setError(err.message)
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen px-4 bg-gray-50'>
        <div className={`w-full max-w-md bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-gray-200`}>
                
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full'>
                        <Logo width='100%'/>
                    </span>
                </div>
                
                <h2 className='text-center text-2xl font-bold leading-tight text-gray-900'>
                    Sign in to your account
                </h2>
               
                <p className="mt-2 text-center text-sm text-gray-600">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-semibold text-black hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {/* if errors then display */}
                {error && <p className='mt-4 text-center text-sm text-red-500 bg-red-50 py-2 px-3 rounded-lg border border-red-200'>
                    {error}</p>}
                    
                
                <form onSubmit={handleSubmit(login)} className='mt-6'>
                    <div className='space-y-5'>
                        
                        {/* passing label, type, placeholder etc */}
                        <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        //options required, validate etc
                        {...register("email",{
                            required: true,
                            validate: {
                                //applying validation regex
                                matchPatern:(value)=> /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/.test(value) ||
                                "Email address must be a valid address"

                            }
                        })}
                        />

                        <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password",{
                            required: true,

                        })}
                        />
                        
                        <Button
                        type="submit"
                        className="w-full bg-black text-white hover:bg-gray-800 transition"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Login