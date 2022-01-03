const express = require('express');
const app = express();
app.route('/')
.get((req,res)=>{
    res.send("Hello Nodejs");
})
.post((req,res)=>{
    var yoon = {
        name : "yoon",
        tall : 175,
        dd : 12,
    };
    res.send(yoon);

})
app.listen(3000, ()=>{
    console.log('Server is running...');
});




