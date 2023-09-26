// code your solution here

function superbowlWin(Array){
    let resultWin =Array.find(x=>x.result==='W') 
    return resultWin.year
}
console.log(superbowlWin(record))
