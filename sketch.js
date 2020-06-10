
var r
var g
var b
var operator;
var X, Y

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(255,255);
operator = createSprite(0,0, 10,10)

}


function draw(){
background(r,g,b)
r = operator.x
g = operator.x
b = operator.y
drawSprites();
operator.x = mouseX
operator.y = mouseY




  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}