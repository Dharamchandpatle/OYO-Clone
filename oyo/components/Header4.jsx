'use client'

import Image from "next/image"

const Header4 = () => {
    return (
        <div className=" flex justify-between  items-center my-14 border-2 rounded-lg border-gray-300 px-5">
            <div className="flex items-center ">
                <Image src={'/fire.jpg'} alt="fire" width={200} height={200} className="w-24 h-24 rounded-lg mr-5" ></Image>

                <div className="text-xl">
                    <p className="font-bold "> Get access to exclusive deals</p>
                    <p className="text-gray-600">Only the best deals your inbox </p>
                </div>

               
            </div>
            <div className="flex">
                    <input type="email" className="px-6 py-3 mr-5 rounded-lg h-12 w-80 outline-none border border-gray-300 " placeholder="e.g. dharam@gmail.com" name="email" id="" />

                    <button type="submit" className="w-40 rounded-lg h-12 bg-[#f72622] text-xl text-white cursor-pointer  ">Notify</button>

                </div>
        </div>
    )
}

export default Header4