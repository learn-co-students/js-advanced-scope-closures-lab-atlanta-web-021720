function produceDrivingRange(drivingRange) {
    return function(locationA, locationB) {
        let intA = parseInt(locationA)
        let intB = parseInt(locationB)
        let distance = intB - intA
        if (distance < drivingRange) {
            let drivingDistance = drivingRange - distance
            return `within range by ${drivingDistance}`
        } else {
            let drivingDistance = distance - drivingRange
            return `${drivingDistance} blocks out of range`
        }
    };
}

function produceTipCalculator(tipPercentage) {
    return function(fare) {
        let tipAmount = tipPercentage * fare
        return tipAmount
    };
}

function createDriver() {
    let DriverId = 0;
    // return the class
    return class {
        constructor(name, manufacturePrice) {
            this.name = name;
            this.manufacturePrice = manufacturePrice;
            this.id = ++DriverId;
        }
    };
}