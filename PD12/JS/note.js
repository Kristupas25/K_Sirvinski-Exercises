//Paskaitos per savaitę:
let lectures = [5, 6, 4, 5, 4];
let lectureTimeMinutes = 45;

let totalLectures = lectures.reduce((sum, lecturesPerDay) => sum + lecturesPerDay, 0);
let totalMinutes = totalLectures * lectureTimeMinutes;

console.log(`Paskaitų skaičius per savaitę - ${totalLectures}. Tai sudaro ${totalMinutes} minučių.`);

//Puodeliai dėžutėje:
let cupsToPack = 7;
let cupsPerBox = 3;

let fullBoxes = Math.floor(cupsToPack / cupsPerBox);
let remainingCups = cupsToPack % cupsPerBox;

console.log(`Pilnų dėžučių skaičius: ${fullBoxes}. Nesupakuotų puodelių skaičius: ${remainingCups}.`);

//Plytų kiekis ir kaina:
let wallLength = 4;
let wallHeight = 3;
let brickLength = 20;
let brickHeight = 10;
let brickPrice = 0.5;

let bricksNeeded = (wallLength * 100 / brickLength) * (wallHeight * 100 / brickHeight);
let totalCost = bricksNeeded * brickPrice;

console.log(`Plytų kiekis ${bricksNeeded}. Plytos kainuos ${totalCost.toFixed(2)} Eur.`);

//Automobilio tunelio laikas:
let tunnelLength = 264;
let carSpeed = 60;

let travelTimeSeconds = (tunnelLength / carSpeed) * 3600;

console.log(`Automobilis tunelį pravažiuos per ${travelTimeSeconds.toFixed(2)} s.`);

//Akvariumo žuvys:
let initialFishCount = 5;
let fishAddedPerDay = 3;
let days = 3;

let totalFish = initialFishCount + fishAddedPerDay * days;

console.log(`Po ${days} dienų akvariume gyvens ${totalFish} žuvų.`);

//Eglučių vidurkis:
let treeHeights = [167, 134, 145, 156, 155, 176];

let averageHeight = treeHeights.reduce((sum, height) => sum + height, 0) / treeHeights.length;

console.log(`Eglutės aukščio vidurkis: ${averageHeight.toFixed(1)} cm.`);

//Bėgimo varžybos:
let runnerTimes = [22, 20, 25, 25];

let fastestRunnerTime = Math.min(...runnerTimes);
let timeDifference = fastestRunnerTime - (runnerTimes.reduce((sum, time) => sum + time, 0) / runnerTimes.length);

console.log(`Greičiausio bėgiko laikas: ${fastestRunnerTime} sek. Jis buvo: ${timeDifference.toFixed(0)} sek geresnis už vidurkį.`);

//Kelionė su automobiliu:
let tankCapacity = 112;
let consumptionOddDays = 11;

let travelDays = Math.floor(tankCapacity / (consumptionOddDays * 2));

console.log(`Keliauti bus galima ${travelDays} dienas.`);

//Autobusų kelionė:

let busCount = 2;
let busData = [
    { time: { hours: 1, minutes: 50 }, passengers: 17 },
    { time: { hours: 2, minutes: 0 }, passengers: 25 },
];

let totalPassengers = busData.reduce((sum, bus) => sum + bus.passengers, 0);
let averageTime = busData.reduce((sum, bus) => sum + bus.time.hours * 60 + bus.time.minutes, 0) / busData.length;
let lessThanTenPassengers = busData.filter((bus) => bus.passengers < 10).length;

console.log(`Bendrai pervežtų keleivių skaičius = ${totalPassengers}. Vidutinis sugaištas važiavimo laikas (min.): ${averageTime.toFixed(0)}. Autobusų skaičius (keleiviai < 10): ${lessThanTenPassengers}.`);

//Programuotojo sportinio ėjimo varžybos:

let stepsForward = 5;
let forwardStepLength = 50;
let stepsBackward = 3;
let backwardStepLength = 45;
let laps = 3;
let timeSeconds = 5;

let totalDistance = laps * ((stepsForward * forwardStepLength + stepsBackward * backwardStepLength) / 100);
let averageSpeed = totalDistance / (timeSeconds * 60);

console.log(`${totalDistance} ${averageSpeed.toFixed(2)}`);