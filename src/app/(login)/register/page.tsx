'use client'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
    const[userForm,setUserForm] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserForm({
            ...userForm,
            [name]: value
        });
    }

    const handleValidation = () => {
        const { name, email, password, confirmPassword } = userForm;
        if (!name || !email || !password || !confirmPassword) {
            alert("All fields are required");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }
     
        console.log("Validation successful", userForm);
        
        return true;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                if(!handleValidation()){
                    alert("Validation failed");
                    return;
                }
        console.log("Form submitted", userForm);
    }
  return (
    <section>
       <div className='bg-white p-[100px] m-4 '>
        <h1 className="text-4xl font-bold text-center mt-10">Register Page</h1>
        <p className="text-center mt-4">Please enter your credentials to Register.</p>
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
            placeholder='Enter your name'
              type="name"
              name="name"
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
           <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            placeholder='Enter email'
              type="email"
              name="email"
                onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
            placeholder='Enter 6+ digits Password'
              type="password"
              name="password"
                onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
            placeholder='Confirm Password'
              type="password"
              name="confirmPassword"
                onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black"
          >
            Register
          </button>
          <p className="text-center mt-4">
            Already have an account? <Link href="/login" className="text-blue-500">Login here</Link>.
          </p>
        </form>
       </div>
    </section>
  )
}
