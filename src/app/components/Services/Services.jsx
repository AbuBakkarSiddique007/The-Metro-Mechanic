import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";


const Services = async () => {
    //Get services data from database
    const serviceCollection = await dbConnect(collectionNameObject.serviceCollection)
    const services = await serviceCollection.find({}).toArray()


    return (
        <div>
            <div className="px-5">
                <h2 className='text-3xl font-bold text-center my-8'>Our Service Area</h2>
                <p className="text-center text-lg px-5 mb-10">
                    We offer a wide range of services to keep your vehicle running smoothly. Our experienced technicians are equipped to handle everything from routine maintenance to complex repairs. Whether you need an oil change, brake service, engine diagnostics, or transmission repair, we've got you covered. We use the latest technology and high-quality parts to ensure your vehicle receives the best care possible. Trust us to provide reliable and efficient service that gets you back on the road safely.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
                {
                    services.map(service => (
                        <div
                            key={service._id}
                            className="max-w-xs w-full bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow duration-200 mx-auto flex flex-col overflow-hidden">
                            <Image
                                src={service.img}
                                alt={service.title}
                                width={400}
                                height={220}
                                className="w-full h-44 object-cover"
                            />
                            <div className="flex-1 flex flex-col justify-between p-5">
                                <h2 className="text-lg font-bold text-gray-800 text-center mb-2">{service.title}</h2>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-base text-gray-700 font-medium">Price: ${service.price}</span>


                                    {/* Details Button */}
                                    <Link href={`/service/${service._id}`}>
                                        <button className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 font-semibold transition-colors">
                                            <span className="text-sm">Details</span>
                                            <FaArrowAltCircleRight className="text-xl" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Services;