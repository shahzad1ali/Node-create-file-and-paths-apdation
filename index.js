const express = require('express');
const app = express();

app.get('',(req,res)=>{    
    res.send('<h1>Welcome, to Home Page</h1><a href="/about" >Go to about page</a> ');
});
app.get('/about',(req,res)=>{
    res.send(`
        <input type="text" placholder="Enter user"  />
        <button>Click Me</button>
        <a href="/" >Go to Home page</a>
        `)
});
app.get('/help',(req,res)=>{
    res.send([
        {
            name:'Shahzad',
            email:"shahzad@hd"
        },
        {
            name:'Anas',
            email:"seszad@hd"
        },
    ]);
});

app.listen(4500);