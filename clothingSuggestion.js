function suggestClothe(tempInCelsius, humidity) {
    var suggestion = "Climate is weird";
    if (tempInCelsius > 30 && humidity > 50) {
        suggestion = "Hot, less clothe";
    } else if (tempInCelsius < 10 && humidity < 50) {
        suggestion = "Cold, more clothes";
    }
    return suggestion;
}

export {suggestClothe};