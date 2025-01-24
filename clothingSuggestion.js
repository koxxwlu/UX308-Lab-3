function suggestClothe(temp, humidity) {
    let suggestion = "Climate is weird";
    if temp > 30 && humidity > 50 {
        suggestion = "Hot, less clothe";
    } else if temp < 10 && humidity < 50 {
        suggestion = "Cold, more clothes";
    }
    return suggestion;
}

export {suggestClothe};