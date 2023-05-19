const filecontroller = require("express").Router();
const fs = require('fs');
const path = require('path');
const { getFilename } = require("../Utils/calender");

filecontroller.post("/createfilesystem", (req,res,next) =>{  
    const notes = `./fileSystem/${getFilename(new Date())}`;

   fs.writeFileSync(notes,"The file created by current time stamp")
        res.status(200).json({
       message:"File created successfully"
    })

})
module.exports = filecontroller;