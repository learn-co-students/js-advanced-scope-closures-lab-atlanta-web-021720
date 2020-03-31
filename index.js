const produceDrivingRange = function (range) {
    return function(starting, ending) {
        let str = "";
        let dist = Math.abs(parseInt(starting) - parseInt(ending));
        if (dist < range) {
            str = `within range by ${range - dist}`;
        } else if (dist > range) {
            str = `${dist - range} blocks out of range`;
        };
        return str;
    };
};

const produceTipCalculator = function(percentage) {
    return function(fare) {
        let tip = fare * percentage;
    return tip;
    };
};

function createDriver () {
    let driverId = 0;
    return class Item {
        constructor(name) {
            this.name = name;
            this.id = ++ driverId;
        };
    };
}