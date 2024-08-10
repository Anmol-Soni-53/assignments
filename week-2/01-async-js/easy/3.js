const fs=require("fs");
fs.readFile("test.txt","utf-8",function(err,data){
    console.log(data);
})

let count = 1;

for (let i = 0; i < 100000; i++) {
  count++;
}
console.log("hii");
for (let i = 0; i < 1000000000; i++) {
    count++;
}
console.log("most expensive task");
