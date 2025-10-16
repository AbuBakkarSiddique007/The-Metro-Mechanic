"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from "../../../public/assets/icons/LogoOne.png";

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home', match: (p) => p === '/' },
        { href: '/about', label: 'About', match: (p) => p.startsWith('/about') },
        { href: '/service', label: 'Service', match: (p) => p.startsWith('/service') || p.startsWith('/service') },
        { href: '/blogs', label: 'Blogs', match: (p) => p.startsWith('/blogs') },
        { href: '/contact', label: 'Contact', match: (p) => p.startsWith('/contact') },
    ];

    const NavLinks = (
        <>
            {links.map(({ href, label, match }) => {
                const active = match(pathname || '/');
                const liClass = active ? 'border-b-2 border-emerald-600' : '';
                const linkClass = `px-2 ${active ? 'text-emerald-700 font-semibold' : 'text-gray-700 hover:text-emerald-700'}`;
                return (
                    <li key={href} className={liClass}>
                        <Link href={href} aria-current={active ? 'page' : undefined} className={linkClass}>
                            {label}
                        </Link>
                    </li>
                );
            })}
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 text-lg font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow text-red-800">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link href={"/"} >
                        {/* The Metro Mechanic */}
                        <Image src={Logo} alt="The Metro Mechanic" width={100} height={100} />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex justify-center items-center gap-5 text-lg font-semibold">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <Link
                        href="/register"
                        aria-current={pathname === '/register' ? 'page' : undefined}
                        className={`text-lg font-semibold px-2 ${pathname === '/register' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-700'}`}
                    >
                        Register
                    </Link>
                    <Link
                        href="/login"
                        aria-current={pathname === '/login' ? 'page' : undefined}
                        className={`text-lg font-semibold px-2 mr-2 ${pathname === '/login' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-700'}`}
                    >
                        Login
                    </Link>

                    <button className="btn px-8 py-5 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;