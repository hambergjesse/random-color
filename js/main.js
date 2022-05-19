/* 
Random RGBA color generator
developed by Jesse Hamberg
Last Updated: 18.05.2022
*/

const r = 0,
  g = 0,
  b = 0,
  a = 0;

function generateColor(r, g, b, a) {
  // randomize red range
  r = Math.floor(Math.random() * 256);
  // randomize green range
  g = Math.floor(Math.random() * 256);
  // randomize blue range
  b = Math.floor(Math.random() * 256);
  // randomize opacity
  a = Math.random().toFixed(1);

  // update block based on random RGBA color values
  document.getElementById("main-sub-canvas").style.background =
    "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

  // display RGBA values as text
  const rgbaStr = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  document.getElementById("main-rgba-value").innerText = rgbaStr;

  // display HEX values as text
  const hexStr =
    "hex: " +
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  document.getElementById("main-hex-value").innerText = hexStr;
}
