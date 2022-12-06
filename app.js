const Express = require('express');

const app = Express();
app.get('/',(req,res,next)=>{
    res.end("Home Paage")
})

app.listen(3000);