'use client'
import React from 'react'
import Link from 'next/link';
import { loginUserFormData } from '@/model/User';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { login } from '@/api/userService';
import { useRouter } from 'next/navigation';
import { getToken, setAuth, setToken } from '@/util/cookies';
import { decodeToken } from '@/util/tokenDecorde';

const MySwal = withReactContent(Swal);

export default function LoginPage() {
  const[userFormData, setUserFormData] = React.useState<loginUserFormData>({email: '', password: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const router =  useRouter();

 const showErrorAlert = (title: string, html: string) => {
        return MySwal.fire({
            title: `<strong>${title}</strong>`,
            html: `<i>${html}</i>`,
            icon: 'error',
            background: '#1F2937',
            color: '#F3F4F6',
            confirmButtonText: 'OK',
            confirmButtonColor: '#F59E0B',
            buttonsStyling: false,
            customClass: {
                container: 'dark',
                popup: 'bg-gray-800 rounded-xl border border-gray-700',
                title: 'text-2xl font-bold text-white',
                htmlContainer: 'text-gray-300',
                confirmButton: 'bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/20'
            }
        });
    };

    const showSuccessAlert = (title: string, html: string) => {
        return MySwal.fire({
            title: `<strong>${title}</strong>`,
            html: `<i>${html}</i>`,
            icon: 'success',
            background: '#1F2937',
            color: '#F3F4F6',
            confirmButtonText: 'OK',
            confirmButtonColor: '#F59E0B',
            buttonsStyling: false,
            customClass: {
                container: 'dark',
                popup: 'bg-gray-800 rounded-xl border border-gray-700',
                title: 'text-2xl font-bold text-white',
                htmlContainer: 'text-gray-300',
                confirmButton: 'bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/20'
            }
        });
    };

    const handleValidation = () => {
    if (!userFormData.email || !userFormData.password) {
      showErrorAlert("Validation Error", "Email and Password are required.");
      return false;
      
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userFormData.email)) {
      showErrorAlert("Validation Error", "Please enter a valid email address.");
      return false;
    }
    return true;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", userFormData);
     try{
     if (!handleValidation()) {
      return;
    }

    const response = await login(userFormData);
    if(response.status == 200){
      showSuccessAlert("Login Successful", "You have successfully logged in.");
      setToken(response.message)
      const decode = decodeToken(response.message);
      // localStorage.setItem('email', userFormData.email);
      setAuth(true);
      // localStorage.setItem('role', response.role);
      router.push('/mainPage');
    };
    if(response.status == 400){
      showErrorAlert("Login Failed", "Invalid email or password.");
    }
   }catch(err){
      console.error("Error during form submission:", err);
      showErrorAlert("Submission Error", "An error occurred while submitting the form.");
      return;
    }
   }

  return (
    <section>
       <div className='bg-white p-[100px] m-4 '>
        <h1 className="text-4xl font-bold text-center mt-10">Login Page</h1>
        <p className="text-center mt-4">Please enter your credentials to login.</p>
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            placeholder='Enter email'
              type="email"
              name="email"
              value={userFormData.email}
              onChange={handleChange}
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
              value={userFormData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-zinc-900"
          >
            Login
          </button>
            <p className="text-center mt-4">
                Don&apos;t forget to sign in <Link href="/register" className="text-blue-500">Register here</Link>
            </p>
            <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-blue-500">Forgot Password?</Link>
            </p>
        </form>
       </div>
    </section>
  )
}
