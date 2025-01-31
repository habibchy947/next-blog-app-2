
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import LoginBtn from '../LoginBtn/LoginBtn';

const Header = async () => {
    const {isAuthenticated} = getKindeServerSession()
    const isUserAuthenticated = await isAuthenticated()
    return (
        <div className="bg-slate-100 lg:w-11/12 mx-auto px-5 py-3 flex items-center justify-between">
            <div className="">
                <h1 className="text-xl">Blogger</h1>
            </div>
            <div className="flex gap-3 items-center">
                <ul className="px-1 flex gap-2">
                    <li className='btn'><Link href='/'>Home</Link></li>
                    <li className='btn'><Link href='/profile'>Profile</Link></li>
                </ul>
                <div className='flex gap-2'>
                    {
                        isUserAuthenticated ? <>
                        <LogoutBtn></LogoutBtn>
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