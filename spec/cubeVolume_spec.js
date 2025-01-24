import {cubeVolume} from "../cubeVolume.js";

describe("test cubeVolume", function() {
    it("test 1m cube", function() {
        let width = 1;
        let length = 1;
        let height = 1;
        let volume = cubeVolume(width, length, height);
        expect(volume.toFixed(0)).toBe("1");
    });
    it("test 3*2*5 cube", function() {
        let width = 3;
        let length = 2;
        let height = 5;
        let volume = cubeVolume(width, length, height);
        expect(volume.toFixed(0)).toBe("30");
    });
});

// console.log(`${km}km is equal to ${miles}miles.`);