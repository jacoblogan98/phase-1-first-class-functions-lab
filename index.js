const returnFirstTwoDrivers = Array => Array.slice(0,2);

const returnLastTwoDrivers = Array => Array.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
       return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(Array, returnDrivers) {
    return returnDrivers(Array);
}
