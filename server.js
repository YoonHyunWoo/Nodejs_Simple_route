const express = require('express');
const app = express();
const route = require('./route');
app.route('/')
.get((req,res)=>{
    res.send("Hello Nodejs");
})
.post((req,res)=>{
    var yoon = {
        name : "yoon",
        tall : 156,
        dd : 12,
    };
    res.send(yoon);

})
app.listen(3000, ()=>{
    console.log('Server is running...');
});




