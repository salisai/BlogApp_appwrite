import React,{useState} from 'react'
import AuthService, { authService } from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../features/authSlice'
import {Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


const Signup = () => {
    const navigate  = useNavigate()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const create = async(data)=>{
        setError("")

        try {
            const userData = await authService.createAccount(data)
            if(userData){
               const userData = await authService.getCurrentUser()
               //update store
               if(userData) dispatch(login(userData));
               navigate("/")
            }
        } catch (error) {
           setError(error.message)    
        }
    }

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="w-20">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign up to create account
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error message */}
        {error && (
          <p className="text-red-600 mt-4 text-center text-sm">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Enter a valid email address",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true, minLength: 8 })}
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup