import {convertMetreToYard} from "../convertMetreToYard.js";

describe("test convertMetreToYard()", function() {
    it("test 113m", function() {
        let m = 113;
        let yard = convertMetreToYard(m);
        expect(yard.toFixed(2)).toBe("123.62");
    });
    it("test 30m", function() {
        let m = 30;
        let yard = convertMetreToYard(m);
        expect(yard.toFixed(2)).toBe("32.82");
    });
});

// console.log(`${km}km is equal to ${miles}miles.`);