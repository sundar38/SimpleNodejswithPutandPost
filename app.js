const express=require("express")
const app=express()
const port= process.env.PORT||8000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// single param
//app.get("/myapp/:id",(req,res)=>{
//     console.log("this is serverss");
//     console.log(req.params.id);
//     const id=req.params.id;
//     return res.send(`running on server new with ${id} server`);
// })
//multiple params
// app.get("/myapp/:name/:id",(req,res)=>{
//     console.log(req.params);
//     return res.send(`this is from ${req.params.name} with ${req.params.id}`)
// })
//passing body directly in postman
app.post("/app",(req,res)=>{
    console.log(req.body);
    return res.send("give the body in postman directly")
})
//passing body via response w/o writing in postman
// app.post("/app",(req,res)=>{
//     console.log(req.body);
//     return res.send({
//         id: 1000,
//         name:"sundar",
//         company:"Accenture cat"
//     })
// })
app.get("/myforms",(req,res)=>{
    return res.send(`
    <html>
        <head></head>
        <body>
            <form action="/submitform" method="POST">
                <label for="name">Name</label>
                <input type="text" name="name"></input>
                <label for="password">Password</label>
                <input type="password" name="password"></input>
                <label for="number">Number</label>
                <input type="number" name="number"></input>
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>
    `)
})
app.post("/submitform",(req,res)=>{
    console.log(req.body);
    return res.send({
        status: 200,
        message: "form submitted successfully",
        data: req.body,
    })
})
app.get("/form", (req,res)=>{
    return res.send(`
        <html>
        <head></head>
        <body>
            <form action="/submitform" method="POST">
                <label for="name">Nme:</label>
                <input type="text"></input>
                <button>submit</button>
            </form>
        </body>
        </html>
    `)
})
app.post("/submitform", (req,res)=>{
    console.log(req.body);
    return res.send({
        status: 200,
        message: "submitted",
        data: req.body
    })
})
app.get("/myhtml",(req,res)=>{
    return res.send(`
    <html>
    <head></head>
    <body>hi this is my server</body>
    </html>
    `)
})

app.get("/",(req, res)=>{
    console.log("this is my porting");
    return res.send(`This is running on the ${port}`)
})
app.get("/myapp/:name/profile/:age",(req, res)=>{
    console.log(req.query)
    console.log(req.params);
    return res.send(`This is running on the ${port}`)
})


app.listen(port,()=>{
    console.log("runnning on port 8006");
})