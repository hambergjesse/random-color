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

  const RGBToHSL = (r, g, b) => {
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;
    return (hslStr = [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ]);
  };

  // display RGBA values as text
  const rgbaStr = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  document.getElementById("main-rgba-value").innerText = rgbaStr;

  const hexStr =
    "hex: " +
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  document.getElementById("main-hex-value").innerText = hexStr;

  // change RGBA value text to B/W based on brightness/darkness of colors
  /*if (r >= 130 || g >= 130 || (b >= 130 && a <= 0.5)) {
    document.getElementById("main-rgba-value").style.color = "black";
  } else {
    document.getElementById("main-rgba-value").style.color = "white";
  }*/

  // change RGBA value text to black if opacity is low
  /*if (a <= 0.2) {
    document.getElementById("main-rgba-value").style.color = "black";
  }*/
}
