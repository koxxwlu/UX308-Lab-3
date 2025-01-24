import {convertKmToMiles} from `./convertKiloToMiles.js`;

describe("test convertKiloToMiles", function() {
    it("test 150 km", function() {
        let km = 150;
        let miles = convertKmToMiles(km);
        expect(miles.toFixed(2)).toBe("93.23");
    });
    it("test 70 km", function() {
        let km = 70;
        let miles = convertKmToMiles(km);
        expect(miles.toFixed(2)).toBe("43.5");
    });
});

// console.log(`${km}km is equal to ${miles}miles.`);