"use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const Logout = () => {
    return <LogoutLink>
            <button className='btn rounded-sm'>Logout</button>
        </LogoutLink>
};

export default Logout;