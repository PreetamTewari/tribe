"use client";
import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    }
    const dropdownStyles = classNames({
        'absolute right-0 top-10 z-50': true,
        'hidden': !showDropdown,
        'bg-white shadow rounded-lg text-gray-900': true,
      });
    
      const dropdownItemStyles = classNames({
        'block px-4 py-2 hover:bg-gray-100': true,
      });

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* Tribe Title */}
            <div className="text-white text-2xl font-bold">
                <Link href="/">Tribe</Link>
            </div>

            <div className="relative inline-block">
                <button
                    className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                    onClick={handleDropdownToggle}
                >
                    Account
                </button>
                <div className={dropdownStyles}>
                    <Link href="/profile" className={dropdownItemStyles}>
                    My Profile
                    </Link>
                    <a href="#" className={dropdownItemStyles} onClick={logout}>
                    Logout
                    </a>
                </div>
                </div>
            
                

        </div>
        </nav>
    );
};

export default Navbar;
