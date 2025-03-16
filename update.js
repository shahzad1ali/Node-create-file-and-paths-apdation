const dbConnect = require('./mongodb');

const updateData=async ()=>{
let data = await dbConnect();
let result = await data.updateOne(
    {name:'note 5'}, {
        $set: {name:'max 5'}
    }
);
console.warn(result)
}

updateData();