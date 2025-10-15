import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Image from "next/image";

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
                            className="card max-w-96 max-h-80 shadow-sm bg-base-100 rounded-lg  hover:shadow-xl transition-shadow duration-300 mx-auto">
                            <div className="px-10 pt-10">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="rounded-xl"
                                />
                            </div>

                            <div className="card-body items-start text-center">
                                <h2 className="text-2xl font-bold">{service.title}</h2>

                                <button className="text-red-500 text-xl font-semibold">Price: $ <span>{service.price}</span></button>
                            </div>
                        </div>))
                }
            </div>
        </div >
    );
};

export default Services;