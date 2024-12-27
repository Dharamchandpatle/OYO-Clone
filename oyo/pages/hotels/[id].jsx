import Image from "next/image"


const SingleHotel = () => {
    return (
        <div className=" w-7/12  mx-auto">
            <Image src={"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12.png"} alt="hotel" width={2000} height={2000} className=" w-full h-large-box my-5  " />

            <div className=" ">
                <h3 className=" text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quasi consectetur animi aperiam repudiandae corrupti!</h3>
                <p className=" text-lg my-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                    quasi consectetur animi aperiam repudiandae corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur neque sapiente, autem molestias incidunt officia..</p>

                <button className=' w-48 h-10 rounded-full hover:bg-red-700 bg-red-600 text-lg text-white font-semibold' >Price : 4500</button>

                <p className=" text-3xl font-bold my-5"> Facilities :</p>
                <ul className="flex text-lg gap-10" >
                    <li>Swimming pool</li>
                    <li> Dogs </li>
                    <li> Garden </li>
                    <li> Loundary </li>
                    <li> Cricket </li>
                </ul>

                <button className=' w-48 h-10 my-5 rounded-full hover:bg-blue-700 bg-blue-600 text-lg text-white font-semibold' >Book Now </button>



            </div>
        </div>
    )
}

export default SingleHotel 