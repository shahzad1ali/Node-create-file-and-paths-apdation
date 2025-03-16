const dbConnect = require('./mongodb');

const insert = async () => {
    const collection = await dbConnect();
    const result = await collection.insertOne(
        { name: 'note 5', brand: 'vivo', price: '459', category: 'mobile' }
    );
    if(result.acknowledged)
    {
        console.log("data inserts");
        
    }
};
insert();