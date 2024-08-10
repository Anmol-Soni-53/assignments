const fs=require("fs")
let data="writing file"

fs.writeFile("test.txt",data,function(){
    console.log("file write succesful");
})