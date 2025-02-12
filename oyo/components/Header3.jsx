'use client'

import Link from "next/link"

const Header3 = () => {
    return (
        <div className=' bg-gradient-to-r from-red-600 to-red-400 h-60 '>
            <div className="p-5">
                <h2 className="text-4xl text-white text-center font-bold ">
                    Over 174,000+ hotels and homes across 35+ countries
                </h2>

                <div className="grid grid-cols-5 my-5 mx-20 ">

                    <input type="text" placeholder='Search...' className=' h-12 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2' />

                    <input type="text" placeholder='Search...' className=' h-12 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />

                    <input type="text" placeholder='Search...' className=' h-12 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />

                    
                    <button type='submit' className='h-12 px-3 py-2 col-span-1 bg-green-500 hover:cursor-pointer hover:bg-green-700 text-white text-xl '><Link href={'/hotels'} > Search </Link></button>
                                                          

                </div>
                <div className="flex mx-20 my-5 font-bold ">

                        <button type='submit' className='h-12 px-3 py-2 bg-transparent  hover:cursor-pointer  text-white text-lg mr-4 '> Continue your search</button>

                        <button type='submit' className='h-12 px-3 py-2   hover:cursor-pointer   text-white text-sm  hover:bg-[#272727] rounded-lg  border-white border-2 mr-5 '> lajpat-nagar·27 Jul - 28 Jul | Guests</button>

                    </div>


            </div>


        </div>
    )
}

export default Header3