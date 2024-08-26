"use client"
import { useState } from "react";

const SignupForm = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        let hasError = false;
        if(password.length < 8){
            setPasswordError("Password must be 8 charecter");
          
        }else {
            setPasswordError('')
        }

        if(password !== confirmPassword){
            setConfirmPasswordError("Password did not matched!")
           
        } else{
            setConfirmPasswordError('')
        }
    }
    return (
      <div className="bg-white shadow-md rounded-lg w-[400px] p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block  text-sm font-bold mb-2">
              Full Name
            </label>
            <input
            required
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md  "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  text-sm font-bold mb-2">
              Email
            </label>
            <input
            required
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block  text-sm font-bold mb-2">
              Zip Code
            </label>
            <input
              type="number"
              id="zip"
              placeholder="Enter your zip code"
              className="w-full px-4 py-2 border rounded-md "
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block  text-sm font-bold mb-2">
              Password
            </label>
            <input
            required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter a password"
              className="w-full px-4 py-2 border rounded-md "
            />

            {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="cpassword" className="block  text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
            required
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
              type="password"
              id="cpassword"
              placeholder="Enter password again"
              className="w-full px-4 py-2 border rounded-md "
            />
            {confirmPasswordError && <p className="text-red-500 text-sm mt-2">{confirmPasswordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md  "
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  
  export default SignupForm;
  