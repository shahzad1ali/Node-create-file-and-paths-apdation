const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'files');
// for(i=0;i<5;i++)
//     {
// fs.writeFileSync(dirPath+"/hello"+i+".text","a simple tet file");
// }

fs.readdir(dirPath,(err,files) => {
    files.forEach((item) => {
        console.log('file name is',item)
    })
})