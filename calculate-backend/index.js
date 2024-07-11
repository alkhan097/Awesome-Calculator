const express= require('express')
const bodyParser=require('body-parser')
const cors = require('cors');
const app= express()
app.use(cors())
app.use(express.json());
const port =3001

app.use('/calculate',(req,res)=>{
    console.log("req.body",req.body)
    const {operation,number1,number2}= req.body
    let result
    if (operation === "add") {
        let result = number1 + number2;
        res.status(200).json({ result });
    } else if (operation === "subtract") {
        let result = number1 - number2;
        res.status(200).json({ result });
    } else {
        res.status(400).json({ response: "bad request, enter properly" });
    }
})



app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})