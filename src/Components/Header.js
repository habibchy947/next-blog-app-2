import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
    const {isAuthenticated} = getKindeServerSession()
    const isUserAuthenticated = await isAuthenticated()
    console.log(isUserAuthenticated)
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
                    {
                        isUserAuthenticated ? <>
                        <button className='btn btn-primary'><Link href='/api/auth/logout'>LogOut</Link></button>
                        </>
                        :
                        <>
                        <button className='btn btn-primary'><Link href='/api/auth/login'>Login</Link></button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;