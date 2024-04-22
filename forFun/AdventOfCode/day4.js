const fs = require('fs')
fs.readFile('./AdventOfCode/input2.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.split("\r\n")
    let a = d.map(lines=>{
        let winNumber = lines.split("|")[0].split(":")[1].split(" ").filter(el=>el!="");
        let myNumber = lines.split("|")[1].split(" ").filter(el=>el!="");
        rep=0;
        myNumber.forEach(el => {
            if(winNumber.includes(el)){
                rep+=1
            }
        });
        return parseInt(2 **(rep-1));
    })  
    console.log(a.reduce((prev,curr)=>prev+curr,0))

})