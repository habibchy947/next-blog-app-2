
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import Logout from './Logout/Logout';
import LoginBtn from './LoginBtn/LoginBtn';

const Header = async () => {
    const {isAuthenticated} = getKindeServerSession()
    const isUserAuthenticated = await isAuthenticated()
    console.log(isUserAuthenticated)
    return (
        <div className="navbar w-full bg-slate-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Blogger</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/profile'>Profile</Link></li>
                </ul>
                <div className='flex gap-2'>
                    {
                        isUserAuthenticated ? <>
                        <Logout></Logout>
                        </>
                        :
                        <>
                        <LoginBtn></LoginBtn>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;