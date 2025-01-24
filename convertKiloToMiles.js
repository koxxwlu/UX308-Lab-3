function convertKmToMiles(km) {
    let miles = km / 1.61;
    return miles;
}

let km = 50;
let miles = convertKmToMiles(km);

// console.log(`${km}km is ${miles}miles.`);

export {convertKmToMiles}