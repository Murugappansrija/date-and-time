// const express = require ('express')
// const filesystem = require('fs')
// const path = require('path')
// const nodeserver = express()

// const pathofdirectry = path.join(__dirname,"timestamp")
// nodeserver.get ('/',(req,res)=>{
//     const utc = new Date()
//     const date =utc.getDate()
//     const month = utc.getMonth()
//     const year = utc.getFullYear()
//     const hour = utc.getHours()
//     const mini = utc.getMinutes()
//     const sec = utc.getSeconds()
//     const settingtime = `the file created at (${year})`
// })

const express = require("express");
const bodyparser = require("body-parser");
const app_server = require("./app");
const server = express();


server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended:true }))

server.use('/api', app_server)


const PORT = 6000;
server.listen(PORT,'localhost',() => {
    console.log('working', PORT);
});