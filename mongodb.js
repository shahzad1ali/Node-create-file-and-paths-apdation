const {MongoClient} = require('mongodb');
const url= 'mongodb://localhost:27017';
const client= new MongoClient(url);
const databaseName= 'e-comm'

async function dbConnect()
{
    let result= await client.connect();
    db= result.db(databaseName);
    return db.collection('product');  
}

module.exports= dbConnect;