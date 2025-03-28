// In ludo how randomly print 1 to 6
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(getRandomNum(1,6));