const fs = require('fs')
fs.readFile('./AdventOfCode/input2.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.split("\r\n")

    d= d.map(word=> word.split(":"))
    d=d.map(line=>{
        line[0] = line[0].split(" ")[1]
        line[1] = line[1].split(";").map(word=>word.split(","))
        line[1] = line[1].map(l=>l.map(colors=>{
            return colors.split(" ")
        }).map(l=>{l.shift();return l}))

        return line;
    })
    const rep = d.map(lines=>{
        let red=1;
        let blue=1;
        let green=1;
        // console.log(lines[1])
        lines[1] = lines[1].map(line=> {
            console.log(line)
            
            const _a = line.map(colors=> {
                if (colors[1]=="red" && parseInt(colors[0])>red){
                    red=parseInt(colors[0])
                    return true;
                }else if (colors[1]=="blue" && parseInt(colors[0])>blue){
                    blue=parseInt(colors[0])
                    return true;
                }else if (colors[1]=="green" && parseInt(colors[0])>green){
                    green=parseInt(colors[0])
                    return true;
                }else{
                    return false;
                }
            })
            console.log(red,blue,green)
            return red*blue*green;
        })
        console.log(lines[1])
        return red*blue*green;
        
    }).reduce((partialSum, a) => partialSum + a, 0)

    console.log(rep);

})