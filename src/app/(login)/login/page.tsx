import React from 'react'
import Link from 'next/link';

export default function LoginPage() {
  return (
    <section>
       <div className='bg-white p-[100px] m-4 '>
        <h1 className="text-4xl font-bold text-center mt-10">Login Page</h1>
        <p className="text-center mt-4">Please enter your credentials to login.</p>
        <form className="max-w-md mx-auto mt-8" action="">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            placeholder='Enter email'
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
            placeholder='Password'
              type="password"
              name="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black"
          >
            Login
          </button>
            <p className="text-center mt-4">
                Don't have an account? <Link href="/register" className="text-blue-500">Register here</Link>
            </p>
            <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-blue-500">Forgot Password?</Link>
            </p>
        </form>
       </div>
    </section>
  )
}
