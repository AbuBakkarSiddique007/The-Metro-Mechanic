import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="hidden lg:flex flex-col justify-center bg-emerald-600 text-white rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-3">Create your account</h2>
                    <p className="text-md opacity-90">
                        Join The Metro Mechanic to book appointments, track service history, and get special offers.
                    </p>
                    <div className="mt-6">
                        <p className="text-sm">Already have an account?</p>
                        <a href="/login" className="mt-2 inline-block bg-white text-emerald-600 font-semibold px-4 py-2 rounded">Sign in</a>
                    </div>
                </div>

               
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Create an account</h1>
                    <form className="space-y-4" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                            <input id="name" name="name" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Enter your Name" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Enter Your Email" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Create a strong password" />
                        </div>

                        <div>
                            <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Confirm password</label>
                            <input id="confirm" name="confirm" type="password" autoComplete="new-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Repeat the password" />
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold">Create account</button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">Or sign up with</p>
                    <div className="mt-4 flex gap-3 justify-center">
                        <button aria-label="Continue with Google" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm text-sm bg-white hover:bg-gray-50">
                            <FaGoogle className="text-red-500" />
                            <span>Google</span>
                        </button>
                        <button aria-label="Continue with GitHub" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm text-sm bg-white hover:bg-gray-50">
                            <FaGithub />
                            <span>GitHub</span>
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">By creating an account, you agree to our <a href="#" className="text-emerald-600">Terms</a> and <a href="#" className="text-emerald-600">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Register;