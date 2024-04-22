const fs = require('fs')
fs.readFile('./AdventOfCode/input2.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.split("\r\n")
    let b={};
    let a = d.map((lines,index)=>{
        let winNumber = lines.split("|")[0].split(":")[1].split(" ").filter(el=>el!="");
        rep=0;
        let myNumber = lines.split("|")[1].split(" ").filter(el=>el!="");
        myNumber.forEach(el => {
            if(winNumber.includes(el)){
                rep+=1
                if(b[rep+index]){
                    b[rep+index] = b[rep+index] +1

                }else{
                    b[rep+index] = 1

                }
            }
        });
       
        if(b[index]){
        // console.log(index)
          for(let i=0;i<b[index];i++){
            rep=0
            myNumber.forEach(el => {
                if(winNumber.includes(el)){
                    rep+=1
                    // console.log("ma")
                    if(b[rep+index]){
                        b[rep+index] = b[rep+index] +1
    
                    }else{
                        b[rep+index] = 1
    
                    }
                }
            });
          }
        }
        // console.log()
        return parseInt(2 **(rep-1));
    })  
    res=0
    for(c in b){
        res+=b[c]
    }
    console.log(res+d.length)

})