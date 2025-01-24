import {suggestClothe} from "../clothingSuggestion.js";

describe("test suggestClothe()", function() {
    it("test 70 degree & 80% humidity", function() {
        let tempInCelsius = 70;
        let humidity = 80;
        let suggestion = suggestClothe(tempInCelsius, humidity);
        expect(suggestion).toBe("Hot, less clothe");
    });

    it("test 5 degree & 10% humidity", function() {
        let tempInCelsius = 5;
        let humidity = 10;
        let suggestion = suggestClothe(tempInCelsius, humidity);
        expect(suggestion).toBe("Cold, more clothes");
    });
    
    it("test 1 degree & 90% humidity", function() {
        let tempInCelsius = 1;
        let humidity = 90;
        let suggestion = suggestClothe(tempInCelsius, humidity);
        expect(suggestion).toBe("Climate is weird");
    });
});

// suggestClothe(temp, humidity)