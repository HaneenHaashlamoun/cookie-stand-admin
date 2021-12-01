import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function overview() {
    return (
        <>
            <Header />
            <main className='flex flex-col items-center mt-8'>
                < Link href='/'>
                    <button className='px-4 py-2 font-bold text-black bg-green-500 rounded hover:bg-green-300'>Home</button>
                </Link>
            </main>
            <Footer />

        </>
    )
}