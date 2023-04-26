if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const cors = require('cors')
const express=require("express")
const mongoose = require("mongoose")
const app= express()
const fs = require("fs")
let sampleData=require('./sample_data.json')
const User = require("./schemas/User")



app.use(cors())

//Initializing Database URL 
const dbUrl=process.env.DB_URL;

//Connecting to the database
mongoose.connect(dbUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true})
.then(()=>{
console.log('Database Connected Successfully')
})
.catch((err)=>{
    console.log('Cannot Connect to Database from index file')
    console.log(err)
})  



//To Upload Data to the Database
app.get('/uploadData',async (req,res)=>{
    for(let i=0;i<sampleData.length;i++)
    {
        const user = new User(sampleData[i])
        await user.save()
        console.log(user)
    }
    res.sendStatus(200)
})


//To answer the assignment Problem 1
app.get('/assignment/1',async(req,res)=>{ 
    let users= await User.where("income").lt("$5.00").where("car").or([{car: 'Mercedes-Benz' },{ car: 'BMW' }])
    res.json(users)
})

//To answer the assignment Problem 2
app.get('/assignment/2',async(req,res)=>{ 
    let users= (await User.where("gender").equals("Male").where("phone_price").gt(10000))
    res.json(users)
})

//To answer the assignment Problem 3
app.get('/assignment/3',async(req,res)=>{ 
    let allUsers= await User.find()
    let result=[]
    let k=0
    for(let i=0;i<allUsers.length;i++)
    {
        singleUser=allUsers[i]
        if(singleUser.last_name.charAt(0)==='M' && 
            singleUser.quote.length > 15 &&
            singleUser.email.indexOf(singleUser.last_name.toLowerCase()) !=-1 )
           result[k++]=singleUser
    }
    res.json(result)
})

//To answer the assignment Problem 4
app.get('/assignment/4',async(req,res)=>{ 
    let result=[]
    let k=0
    const filteredResult = await User.where("car").or([{ car: 'BMW' }, { car: 'Audi' }, { car: 'Mercedes-Benz' }])

    //To fliter Digitless Email 
    for(let i=0;i<filteredResult.length;i++)
    {
        let email=filteredResult[i].email
        let flag=0
        for(let j=0;j<email.length;j++)
            if(parseInt(email.substring(j,j+1))>=0)
            {
                flag=1
                break
            }
        if(flag==0)
        result[k++]=filteredResult[i]
    }

    res.json(result)
})

//To answer the assignment Problem 5
app.get('/assignment/5',async(req,res)=>{ 
    let users= await User.where("income").lt("$5.00").where("car").or([{car: 'Mercedes-Benz' },{ car: 'BMW' }]).sort("city")
    res.json(users)
})

//To access all the data
app.get('/assignment/0',async(req,res)=>{ 
    let allUsers= await User.find()
    res.send(allUsers)
})
//To catch all the rest routes
app.get("*",(req,res)=>{
    res.send("404 error")
})


app.listen("3000",()=>{
    console.log("Listening at Port 3000")
})