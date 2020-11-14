const express = require("express")
const app = express();

app.get("/add", (req,res)=>{
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    let result = value1 + value2
    res.send(`${result}`)
})

app.get("/substract", (req,res)=>{
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    let result = value1 - value2
    res.send(`${result}`)
})

app.get("/multiply", (req,res)=>{
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    let result = value1 * value2
    res.send(`${result}`)
})

app.get("/divide", (req,res)=>{
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    let result = value1 / value2
    res.send(`${result}`)
})



app.listen(3000, function () {
    console.log(" Server is listening on port 3000. ")
})