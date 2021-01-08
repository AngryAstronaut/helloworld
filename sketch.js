function setup()
{
  createCanvas(800, 800);
  
}

function draw() {
  
  background(255);
  smooth();
  translate(400, 400); 
  
  //fill(192);
  fill(255);
  noStroke();
  circle(0,0,750);
  
  // then pivot the grid
  
  for (let i = 0; i < 100; i = i+1) {
  rotate(radians(3.6));
  // and draw the square at the origin
  fill(0);
  //originally started at createCanvas 14
  square(355, -7, 12);
  square(340, -6.5, 11);
  square(325, -6, 11);
  square(310, -5.5, 10);
  square(295, -5, 10);
  square(280, -4.5, 9);
  square(265, -4, 8);
  square(250, -3.5, 8);
  square(235, -3, 8);
  square(220, -2.5, 8);
  
}

  ////translate(width/2,height/2);
  //let a = atan2(mouseY-height/2, mouseX-width/2);
  //rotate(a);
  //fill(0);
  //rect(-375,-5,750,10);
  
  //fill(255);
  fill(0);
  circle(0,0,5);
}
