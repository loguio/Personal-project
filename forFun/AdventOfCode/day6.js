const fs = require('fs')
fs.readFile('./AdventOfCode/input2.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.split("\r\n")
    times=d[0].split(" ")
    times.shift()
    times=parseFloat(times.filter(el=>el!="").join(""));
    distances=d[1].split(" ")
    distances.shift()
    distances=parseFloat(distances.filter(el=>el!="").join(""))

    console.log(times,distances)
    // wins=[]
    // for(i=1;i<times.length;i++){
        win=0;
        for(time=1;time<times;time++){
            distance = time*(times-time)
            if(distance>distances){
                win++
            }
        }
        console.log(win)
    // }
    // console.log(wins.reduce((prev,curr)=>prev*curr,1));

})

