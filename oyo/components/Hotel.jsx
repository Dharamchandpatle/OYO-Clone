import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hotel = () => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5'>
      <div className="flex">
        <Image src={"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12.png"} alt='hotel' width={200} height={200} className='w-96 h-large-box mr-3 ' />

      <div className=" grid grid-rows-3 gap-2 ">
        <Image src={"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12.png"} alt='hotel' width={200} height={200} className='w-28' />
        <Image src={"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12.png"} alt='hotel' width={200} height={200} className='w-28' />
        <Image src={"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12.png"} alt='hotel' width={200} height={200} className='w-28' />
        <Image src={"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12.png"} alt='hotel' width={200} height={200} className='w-28' />
      </div>

      <div className=" ml-16">
        <h2 className="text-3xl font-bold line-clamp-1">Hotel Name</h2>
        <p className="text-justify my-5 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quod.</p>

        <p className="text-2xl my-5"> 
          <span className="font-bold "> Facilities : </span>
          <span className=""> Free wi-fi , pet care , Swimming Pool , Beaches , Resorts </span>
        </p>
        
<div className=" flex items-center">
<button className=' w-48 h-10 rounded-full hover:bg-red-700 bg-red-600 text-lg text-white font-semibold' >Price : 4500</button>
<Link href={'/hotels/2'} className=' text-xl font-bold text-red-600 ml-10 hover:text-red-800 hover:underline'>See Details</Link>
</div>
      </div>


      </div>

    </div>
  )
}

export default Hotel