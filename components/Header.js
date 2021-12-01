import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="flex items-center justify-between p-4 text-black bg-green-500 w-full mt-0">
            <h1 className='text-5xl'>Cookie Stand Admin</h1>
            <Link href='/overview'>
                <button className="px-4 py-2 font-bold text-black bg-white rounded hover:bg-green-300">
                    Overview
                </button>
            </Link>

        </div>
    )
}



// function Header() {
//     return (
//         <div className="flex items-center justify-between p-4 mt-8 text-black bg-green-500">
//             <h1 className="text-2xl font-bold">Cookie Stand Admin</h1>
//             <Link href='/overview'>
//                 <button className="px-4 py-2 font-bold text-black bg-white rounded hover:bg-green-300">
//                     Overview
//                 </button>
//             </Link>
//         </div>
//     )
// }

// export default Header;