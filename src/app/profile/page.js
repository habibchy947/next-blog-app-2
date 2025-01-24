import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
    const {isAuthenticated} = getKindeServerSession()
        const isUserAuthenticated = await isAuthenticated()
        console.log(isUserAuthenticated)
        if(!isUserAuthenticated){
           redirect('/api/auth/login')
        }
    return (
        <div className='w-11/12 mx-auto mt-3'>
            <h1 className='text-4xl font-semibold'>Welcome to your profile?</h1>
        </div>
    );
};

export default Profile;