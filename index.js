// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return [array[0], array[1]];
};

const returnLastTwoDrivers = (array) => {
  return [array[array.length - 2], array[array.length - 1]];
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (int) {
    return int * 5;
  };
}

const fareDoubler = (int) => {
    return int * 2
}

const fareTripler = (int) => {
    return int * 3
}


function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}