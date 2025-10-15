import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNameObject = {
    serviceCollection: "services",
    
}

function dbConnect(collectionName) {
    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });


    return client.db(process.env.DB_USER).collection(collectionName);
}

export default dbConnect;