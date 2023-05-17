// change the contents of "dimensions" to width and height of viewport in pixels every time it changes
var pastDimensions = [window.innerWidth, window.innerHeight];
while (true) {
  var dimensions = [window.innerWidth, window.innerHeight];
  if (dimensions != pastDimensions) {
    pastDimensions = dimensions;
    document.getElementById("dimensions").innerHTML = dimensions[0] + "x" + dimensions[1] + "px";
  }
}