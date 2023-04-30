// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
    let min, max;

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] === 'number') {
            max = temps[i];
            min = temps[i];
            break;
        }
    }

    for (let i = 0; i < temps.length; i++) {
        if (temps[i] !== 'error') {
            if (temps[i] > max) max = temps[i];
            if (temps[i] < min) min = temps[i];
        }
    }

    console.log(max - min)
}

calcTempAmplitude(temperatures)

// PROBLEM 2:
// Function should now receive 2 arrays of temps


const calcTempAmplitude2 = function (temps1, temps2) {
    const temps = temps1.concat(temps2);

    let min, max;

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] === 'number') {
            max = temps[i];
            min = temps[i];
            break;
        }
    }

    for (let i = 0; i < temps.length; i++) {
        if (temps[i] !== 'error') {
            if (temps[i] > max) max = temps[i];
            if (temps[i] < min) min = temps[i];
        }
    }

    console.log(max - min)
}

calcTempAmplitude2([2, 5, -3], [31, -32, 2]);
calcTempAmplitude(['error', 2, 3, 4, 5, -12, 'error'])
calcTempAmplitude(['error', 'error', 'error'])