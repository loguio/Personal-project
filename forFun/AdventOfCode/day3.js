const fs = require('fs')
fs.readFile('./AdventOfCode/input2.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.split("\r\n")
    const rep=[];
    d.map((lines,index)=>{

        number="";
        find=false;
        for (let i = 0; i < lines.length; i++) {
            if (!isNaN(parseInt(lines[i]))){
                number+=lines[i];
                if(i>0&&lines[i-1]!="." && isNaN(parseInt(lines[i-1]))){
                    find=true;
                }
                if(index>0 && i>0 &&d[index-1][i-1]!="." )
                {
                    find=true;
                }
                if(index<d.length-1 && i>0 &&d[index+1][i-1]!="." )
                {
                    find=true;
                }
                if(i<lines.length-1 && lines[i+1]!="." && isNaN(parseInt(lines[i+1]))){
                    find=true;
                }
                if(index>0 && i<lines.length-1 && d[index-1][i+1]!=".")
                {
                    find=true;
                }
                if(index<d.length-1 && i<lines.length-1 && d[index+1][i+1]!="." )
                {
                    find=true;
                }
                if(index>0 && d[index-1][i]!="." )
                {
                    find=true;
                }
                if(index<d.length-1&& d[index+1][i]!=".")
                {
                    find=true;
                }
            }else{
                if(number!=""&&find==true){
                    rep.push(parseInt(number));
                    // console.log(number)
                    find=false;
                }
                number="";
            }
            
        }
        return parseInt("aa");
    })

    console.log(rep.reduce((previous,current) => previous+current,0));
})