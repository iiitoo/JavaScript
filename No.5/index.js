var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
function buildPlanet(name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};
function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};
planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet()