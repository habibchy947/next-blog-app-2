"use client"
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import React from 'react';

const LoginBtn = () => {
    return <LoginLink>
        <button className='btn rounded-sm'>Login</button>
    </LoginLink>
};

export default LoginBtn;