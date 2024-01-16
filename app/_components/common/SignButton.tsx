'use client'
import React from 'react'
import { PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function SignButton() {
    const { data:session } = useSession();
    console.log(session);

    if (session && session.user)
    return (
      <div className="">
        <p className="text-sky-600">{session.user.name}</p>
        <Link href="/api/auth/signout" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
        </Link>
      </div>
    );

    return (
        <>
        <Link href="/api/auth/signin" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign In</div>
        </Link>
        </>
    )
    }
