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

  // update background color
  document.body.style.background =
    "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

  // display RGBA values as text
  const str = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  document.getElementById("main-rgba-value").innerText = str;

  // change RGBA value text based on brightness/darkness of colors
  if (r >= 130 || g >= 130 || (b >= 130 && a <= 0.5)) {
    document.getElementById("main-rgba-value").style.color = "black";
  } else {
    document.getElementById("main-rgba-value").style.color = "white";
  }

  // change RGBA value text to black if opacity is low
  if (a <= 0.2) {
    document.getElementById("main-rgba-value").style.color = "black";
  }
}
