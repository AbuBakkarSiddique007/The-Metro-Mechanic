import dbConnect, { collectionNameObject } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Checkout from "../../../../public/assets/images/checkout/checkout.png"

const ServiceDetails = async ({ params }) => {
    const { id } = params
    console.log(id);

    // Get Individual service data from database
    const servicesCollection = await dbConnect(collectionNameObject.serviceCollection)
    const filter = { _id: new ObjectId(id) }
    const service = await servicesCollection.findOne(filter)
    console.log(service);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg font-medium">Service not found.</p>
            </div>
        );
    }

    return (
        <div>
            <section className=''>
                <div className='relative overflow-hidden'>
                    <figure className='flex max-w-full justify-center'>
                        <Image
                            src={Checkout}
                            alt="Service Details"
                            height={300}
                            className='w-full object-cover'
                        />
                    </figure>

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(21,21,21,1),_rgba(21,21,21,0)_100%)]"></div>

                    <div className='absolute top-0 left-0 w-full h-full flex items-center'>
                        <h2 className='text-5xl text-white font-bold ml-10 my-4 z-10 text-left'>Service Details</h2>
                    </div>

                    <div className='absolute bottom-0 left-0 w-full flex justify-center pb-6 '>
                        <span className='bg-black/60 text-white px-4 py-2 rounded-lg text-lg font-medium z-10'>Home/Service Details</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-full mx-auto my-10 p-5 flex flex-col lg:flex-row justify-between gap-6">
                    <div className='w-full lg:w-8/12 border-2 border-green-400 p-4 rounded-lg bg-white'>
                        {service.img && (
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                        )}
                        <h2 className="text-2xl font-bold mb-4 text-center">{service.title}</h2>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <p className="text-lg font-semibold">Price: ${service.price}</p>
                    </div>
                    <div className='w-full lg:w-4/12 border-2 border-red-400 p-4 rounded-lg bg-white'>
                        
                        <h3 className="text-xl font-bold mt-6 mb-2">Why Choose Our Service?</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Experienced and certified technicians</li>
                            <li>High-quality parts and equipment</li>
                            <li>Customer satisfaction guaranteed</li>
                            <li>Competitive pricing</li>
                            <li>Convenient scheduling and location</li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ServiceDetails;