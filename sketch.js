let prev, next;
function setup() {
  createCanvas(400, 400, WEBGL);
  prev = createFramebuffer({ format: FLOAT });
  next = createFramebuffer({ format: FLOAT });
  imageMode(CENTER);

  describe('a rotating, multicolor circle drawing a drail fading away behind it');
}
function draw() {
  // Swap prev and next
  [prev, next] = [next, prev];
  // Clear next and draw a new next frame
  next.begin();
  clear();
  // Slightly rotate and scale the last frame
  push();
  rotate(0.01);
  scale(0.99);
  image(prev, 0, 0);
  pop();
  // Add a sphere on top
  translate(sin(frameCount*0.1)*50, sin(frameCount*0.11)*50);
  noStroke();
  normalMaterial();
  sphere(25);
  next.end();
  background(255);
  image(next, 0, 0);
}