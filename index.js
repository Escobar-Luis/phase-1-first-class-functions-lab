// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,5);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

function fareDoubler(fare) {
    const newFare = fare * 2;
    return newFare;
}

function fareTripler(fare) {
    const newFare = fare * 3;
    return newFare;
}

function selectDifferentDrivers(arrayofDrivers, func) {
    return func (arrayofDrivers)
}