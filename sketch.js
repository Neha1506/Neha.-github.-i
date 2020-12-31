let img;
let step;

function preload() {
  img = loadImage('marilyn-monroe.jpeg');
}

function setup() {
  img.resize(0, 500);
step = 10;
  rectMode(CENTER);
  
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (let j = 0; j <= height; j += step) {
    for (let i = 0; i <= width; i += step) {
      let b = brightness(img.get(i, j));
      
      
      let rad = map(b,0,255,step,1);
      fill(0);
      // noStroke();
      ellipse(i, j, rad, rad);
    }
  }

}

function draw() {
}

