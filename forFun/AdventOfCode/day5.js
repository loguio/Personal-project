const fs = require('fs')
fs.readFile('./AdventOfCode/input2.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.split("\r\n").filter(el=>el!="")
    temp= d[0].split(" ")
    temp.shift()
    seed=[]
    console.log("la")
    for(i=0;i<temp.length;i++){
        // console.log(i)
        for(j=temp[i];j<temp[i]+temp[i+1]-1;j++){
            // console.log(j)
            seed.push(j)
        }
        i++;
    }
    d.shift();
    console.log(seeds)
    seeds = seeds.map(seed=>{
        b=seed
        seed=parseInt(seed)
        a=false
        for(let i=0;i<d.length;i++){
            if (isNaN(parseInt(d[i][0]))){
                a=false;
            }else{
                // console.log(line)
                l=d[i].split(" ")
                // console.log(l)
                // console.log("seed:",seed,"source:",l[1],"max:",parseInt(l[1])+parseInt(l[2])-1)
                if(a==false&&seed>=parseInt(l[1])&& seed<=parseInt(l[1])+parseInt(l[2])-1){
                    // console.log("dans le if")
                    seed=parseInt(l[0])+(seed-l[1]);
                    a=true;
                }
            }
            // console.log("seed : ",seed);
            // console.log("seed de base : ",parseInt(b));
        }
        return seed;
    })
    console.log("seeds : ",seeds);
    console.log("min:",Math.min(...seeds));

})

