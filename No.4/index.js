var planet1 = {name: "Jupiter", radius: 69911};
function calculateSizes(planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.1415926 * r * r * r / 3;
};
function displaySizes(planet) {
    console.log(planet.name);
    console.log("surface area = " + planet.area + " squarekm");
    console.log("volume = " + planet.volume + " cubickm");
};

calculateSizes(planet1);
displaySizes(planet1);