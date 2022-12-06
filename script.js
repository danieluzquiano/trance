let zoff=1000000;
let mX, mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(80);
  let mm = map(mX, 0, width, -3, 3);
  let my = map(mY, 0, height, 3, -3);
  noFill()
  for (let a = 0; a < 2.5; a += 0.0004) {
    stroke(255)
    strokeWeight(0.0128)
    let x = a*10000;
    let y = (a)/tan(x+zoff)+my;
    let e = (cos(x))*1.3;
    circle(cos(tan(sin(y+my)))/e, (((y-mm)))*a, 0.0031);
  }
  zoff += 0.035;
}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
