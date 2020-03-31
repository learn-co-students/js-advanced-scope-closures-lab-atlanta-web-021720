function produceDrivingRange(range){
    return function(startingPoint, endingPoint) {
        let start = parseInt(startingPoint)
        let end = parseInt(endingPoint)
        let travel = Math.abs(end - start)
        let diff = range - travel

        if(diff > 0) {
            return `within range by ${diff}`
        } else {
            return `${Math.abs(diff)} blocks out of range`
        }
    }
}

function produceTipCalculator(tipAmount) {
    return function(num) {
        return num * tipAmount
    }
}

function createDriver() {
    let driverId = 0
    return class{
        constructor(name) {
            this.id = driverId++
            this.name = name
        }
    }
}