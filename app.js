function toCelcius(F) {
    return (F - 32) * (5 / 9);
    // return (F - 32)/1.8;
}

function toFahrenheit(C) {
    return (C * 9 / 5) + 32;
    // return (C * 1.8) + 32;
}

module.exports = {
    toCelcius,
    toFahrenheit,
};
