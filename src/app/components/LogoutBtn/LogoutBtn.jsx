"use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";


const LogoutBtn = () => {
    return <LogoutLink>
            <button className='btn rounded-sm'>Logout</button>
        </LogoutLink>
};

export default LogoutBtn;