
function produceDrivingRange(range){
    return function(arg1, arg2) {
    let start = parseInt(arg1)
    let end = parseInt(arg2)

    let distance = end - start
    let difference = range - distance
    if (difference > 0) {

        return `within range by ${difference}`
    } else {

        return `${Math.abs(difference)} blocks out of range`
    }
    }   
}

function produceTipCalculator(tip) {
    return function(fare){
        return fare * tip 
    }
}

function createDriver(){
    let driverId = 0
    return class {
        constructor(name){
            this.name = name
            this.id = ++driverId
        }
    }
}

