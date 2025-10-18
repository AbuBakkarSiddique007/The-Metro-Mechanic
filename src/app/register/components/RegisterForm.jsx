"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import React from 'react';
const RegisterForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        const userInfo = {
            name,
            email,
            password
        }

        registerUser(userInfo)
    }


    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your Name" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter Your Email" />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Create a strong password" />
                </div>

                <div>
                    <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Confirm password</label>
                    <input
                        id="confirm"
                        name="confirm"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Repeat the password" />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold">Create account</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;