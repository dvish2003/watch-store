'use client'
import Link from 'next/link'
import React from 'react'
import { saveUser } from '@/api/userService';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { userFormData } from '@/model/User';
import { useState } from 'react';


export default function RegisterPage() {
    const MySwal = withReactContent(Swal);

    const [userForm, setUserForm] = useState<userFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;void
        setUserForm({
            ...userForm,
            [name]: value
        });
    }

    const handleValidation = async () => {
        const { name, email, password, confirmPassword } = userForm;

        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            await showErrorAlert("Validation Error", "All fields are required.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            await showErrorAlert("Validation Error", "Please enter a valid email address.");
            return false;
        }

        if (password !== confirmPassword) {
            await showErrorAlert("Validation Error", "Passwords do not match.");
            return false;
        }

        if (password.length < 6) {
            await showErrorAlert("Validation Error", "Password must be at least 6 characters long.");
            return false;
        }

        console.log("Validation successful", userForm);
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted with data:", userForm);

        const isValid = await handleValidation();
        if (!isValid) {
            return;
        }

        try {
            const response = await saveUser(userForm);

            if (response.status == 201) {
                await showSuccessAlert('Registration Successful', 'You have successfully registered. Please login to continue.');
                setUserForm({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            } else {
                await showErrorAlert('Registration Failed', response.message || 'An error occurred during registration.');
            }

        } catch (error) {
            await showErrorAlert('Server Error', 'Something went wrong. Please try again later.');
            console.error('Error while registering:', error);
        }
    };

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
                            value={userForm.name}
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
                            value={userForm.email}
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
                            value={userForm.password}
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
                            value={userForm.confirmPassword}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-zinc-900"
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