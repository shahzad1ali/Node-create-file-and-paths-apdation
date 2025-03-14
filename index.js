const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'curd');
const filepath = `${dirpath}/apple.text`;

// Create File 
// fs.writeFileSync(filepath,'this is a simple text file');

//file path
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
    
// })
// Files Updted 
//  fs.appendFile(filepath,'and file name is apple.text',(err)=>{
//     if (!err) console.log("file is updated")
//  })

// Delete files and create new file in this space

// fs.rename(filepath,`${dirpath}/fruit.text`,(err)=>{
//     if(!err) console.log("file name updated");
    
// })

fs.unlinkSync(`${dirpath}/fruit.text`)