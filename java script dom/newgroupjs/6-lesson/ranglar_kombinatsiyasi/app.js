const color1 = prompt("rang1 nomini kiriting");
const color2 = prompt("rang2 nomini kiriting");
if (
  (color1 == "red" && color2 == "blue") ||
  (color1 == "blue" && color2 == "red")
) {
  console.log("purple");
} else if (
  (color1 == "red" && color2 == "yellow") ||
  (color1 == "yellow" && color2 == "red")
) {
  console.log("orange");
} else if (
  (color1 == "blue" && color2 == "yellow") ||
  (color1 == "yellow" && color2 == "blue")
) {
  console.log("green");
} else {
  console.log("Bundan kombinatsiya yo`q ..");
}
