const fs = require('fs')
fs.readFile('mot.txt', (err, data) => {
    if (err) throw err;
    let d = data.toString()
    d=d.replaceAll("one","on1e")
    d=d.replaceAll("two","tw2o")
    d=d.replaceAll("three","thr3ee")
    d=d.replaceAll("four","fo4ur")
    d=d.replaceAll("five","fi5ve")
    d=d.replaceAll("six","s6ix")
    d=d.replaceAll("seven","sev7en")
    d=d.replaceAll("eight","ei8ght")
    d=d.replaceAll("nine","ni9ne")
    d=d.split("\r\n")
    console.log(d.map(el=>{
        let a= el.replace(/\D+/g, '')
        return parseInt(a[0]+a[a.length-1])
    }).reduce((partialSum, a) => partialSum + a, 0))

})