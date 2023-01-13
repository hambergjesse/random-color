// Random RGBA color generator
// developed by Jesse Hamberg
// Last Updated: 18.05.2022

// Declare variables for red, green, blue, and alpha, and set their initial values to 0
const r = 0,
  g = 0,
  b = 0,
  a = 0;

// Define function to generate a random color
function generateColor(r, g, b, a) {
  // Randomize red value from 0 to 255
  r = Math.floor(Math.random() * 256);
  // Randomize green value from 0 to 255
  g = Math.floor(Math.random() * 256);
  // Randomize blue value from 0 to 255
  b = Math.floor(Math.random() * 256);
  // Randomize alpha value from 0 to 1
  a = Math.random().toFixed(1);

  // Use the generated color values to update the background color of an element
  document.getElementById("main-sub-canvas").style.background =
    "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

  // Display the RGBA values as text
  const rgbaStr = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  document.getElementById("main-rgba-value").innerText = rgbaStr;

  // Display the HEX values as text
  const hexStr =
    "hex: " +
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  document.getElementById("main-hex-value").innerText = hexStr;
}
