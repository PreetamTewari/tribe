import React from 'react';

export default function Footer() {
    return (
        //footer with white background and black text with name Tribe in tailwind css
        <footer className="flex items-center justify-center flex-wrap bg-white p-4">
            <div className="flex items-center flex-shrink-0 text-black mr-4">
                <span className="font-semibold text-lg tracking-tight">
                    &copy; 2023 tpreetam
                </span>
            </div>
        </footer>
    );
}