// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  var result = (fahren-32) * (5/9);
  return result;
};
var mytemp = convertToCelsius(64);

createMessage
console.log("My tempature in celcius is",mytemp,"degrees")

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {64} fahren
 * @param {17.778} celc
 */
function createMessage(fahren, celc) {
  window.alert("temp is 17.778 c feels very cold")
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(rand) {
  let x;
  let y;
  let z;
  
  document.getElementById ("generatebutton") .onclick (rand)
    x = math.floor(math.rand()*6) +1;
    y = math.floor(math.rand()*6) +1;
    z = math.floor(math.rand()*6) +1;

   document.getElementById("xlabel").innerHTML =x;
   document.getElementById("ylabel").innerHTML =y;
   document.getElementById("zlabel").innerHTML =z;

  }


// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
