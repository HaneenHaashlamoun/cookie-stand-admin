import React from 'react'
import Link from 'next/link'
import { useAuth } from '../contexts/auth'

export default function Header() {
    const { user, logout } = useAuth()
    return (
        <div className="flex items-center justify-between p-4 text-black bg-green-500 w-full mt-0">
            <h1 className="text-2xl">Cookie Stand Admin</h1>
            <div>
                <button className="p-2 m-4 font-bold uppercase bg-green-500 rounded text-green hover:bg-green-600 text-gray-50">
                    {user?.username || "ananumous"}
                </button>
                <button className="p-2 m-4 font-bold bg-green-600 rounded-lg" onClick={logout}>Sign Out</button>
                <Link href='/overview' >
                    <button className='p-2 m-4 font-bold bg-gray-400 rounded-lg '>overview</button>
                </Link>
            </div>

        </div>
    )
}
