import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="navbar w-full bg-slate-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Bolgger</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/profile'>Profile</Link></li>
                </ul>
                <div className='flex gap-2'>
                    <button className='btn btn-primary'>Login</button>
                    <button className='btn btn-secondary'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;