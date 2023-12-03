const mongoose = require('mongoose')

require('dotenv').config()

const url = process.env.mongo_url


function MongoDBConnection() {
 mongoose.connect(url)
 .then(()=>{
    console.log("mongodb connected")
 })
 .catch((error)=>{
    console.log(error)
 })
}

module.exports = {MongoDBConnection}