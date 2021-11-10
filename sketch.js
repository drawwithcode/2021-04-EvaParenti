let myImage;

const phrase = "Discover the canvas";
const words = phrase.split(" "); //split to have each worlds of this sentence
let Buttons;
let iterator = 0;

let ops;

function preload() {
  myImage = loadImage("./assets/fantasy.jpg");
}

function resetFC() {
  frameCount = 0;
  descTime = 0;
  header.style("top", "-100px");
  window.history.pushState("home", "SDSTREF", "?");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //uguale a scrivere function(variable){} but più veloces
  words.forEach((word) => {
    createElement("button", word);
  }); // from our words, for each element (split) > let's have a function

  allButtons = selectAll("button");
}
function windowResized() {
  wSize = [windowWidth, windowHeight];
  resizeCanvas(wSize[0], wSize[1]);
}

function draw() {
  backgroundImage(myImage);

  for (var x = 0; x < windowWidth; x += 10) {
    for (var y = 0; y < windowHeight; y += 10) {
      var distance = dist(x, y, mouseX, mouseY);
      var remap = map(distance, -40, width, 0, -90); // remap it, and set as starting max value 565, higher values are ignored
      noStroke();
      fill("black");
      ellipse(x, y, remap);
    }
  }

  iterator++;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 40 * i) / 100) * windowWidth;
    let y = noise((iterator - 40 * i) / 100) * windowHeight;

    singleButton.style("position: absolute");
    singleButton.position(x, y);
  });
}

function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  pop();
}

/*
Create dynamic and/or moving HTML elements, modify them and use callbacks (see slide 10). 
Use at least one interaction from the last lesson(mouse, keyboard)*/
