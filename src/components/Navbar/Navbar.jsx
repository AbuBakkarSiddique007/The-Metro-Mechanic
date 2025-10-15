import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/icons/LogoOne.png"

const Navbar = () => {

    const NavLinks = <>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"services"}><li>Services</li></Link>
        <Link href={"/blogs"}><li>Blogs</li></Link>
        <Link href={"/contact"}><li>Contact</li></Link>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 text-lg font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow text-red-800">
                            {
                                NavLinks
                            }
                        </ul>
                    </div>
                    <Link href={"/"} >
                        {/* The Metro Mechanic */}
                        <Image src={Logo} alt="The Metro Mechanic" width={100} height={100} />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex justify-center items-center gap-5  text-lg font-semibold">
                        {
                            NavLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-8 py-5 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        Appointment
                    </button>
                </div>
            </div>
        </div>
    );
}; export default Navbar;