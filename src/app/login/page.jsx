import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
             
                <div className="hidden lg:flex flex-col justify-center bg-emerald-600 text-white rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-3">Welcome back</h2>
                    <p className="text-md opacity-90">
                        Sign in to access your dashboard, manage appointments, and view service history. We keep your data safe and secure.
                    </p>
                    <div className="mt-6">
                        <p className="text-sm">Need an account?</p>
                        <a href="/register" className="mt-2 inline-block bg-white text-emerald-600 font-semibold px-4 py-2 rounded">Create account</a>
                    </div>
                </div>

                
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Login to your account</h1>
                    <form className="space-y-4" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="you@example.com" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="••••••••" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-emerald-600 hover:text-emerald-800">Forgot your password?</a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">Or continue with</p>
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
                </div>
            </div>
        </div>
    );
};

export default Login;