const express = require("express")
const { MongoDBConnection } = require("./MongoDBConnection")
require('dotenv').config()
const cors = require('cors')
const { userRouter } = require("./router/userRouter")
const { teamRouter } = require("./router/teamRouter")

const app = express()
const PORT = process.env.PORT


//midlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/',userRouter)
app.use('/',teamRouter)

MongoDBConnection()

app.listen(PORT,()=>{
console.log(`app is running on ${PORT}`)
})