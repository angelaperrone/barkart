function BarkMark(x, y, vol) {

  // var vol = barking.getLevel();


  this.x = x;
  this.y = y;
  this.vol = vol;
  this.col = color(random(255), random(255), random(255));
  this.r = howlong / 10;
  this.txt = "bark time:" + hour() + ":" + minute() + ":" + second();

  //this.graphX = hour() + minute();

  // later maybe use this to map to x?
  this.time = millis();


  //console.log(this.r/10);

  this.drawGraph = function() {


    // button3 = createButton('stop');
    // button3.mousePressed(stopAction);
    // button3.position(910, 610); //canvas2 = createCanvas (width, h);
   
    //var x = map(this.time, 0, 1000*60*5, 0, width);

    // var y = map(this.r, 0, howlong / 10, 0, 25);
    var x = map(this.time, 0, globalTime, 0, width);
    //var h = map(height, 0, howlong / 10, howlong / 10, 0);
    var h = map(this.r, 0, 200, height, 0);


    //canvas = map(height, 0, howlong / 10, howlong / 10, 0);
    fill(255);
    // var y = use map() with this.r!
    //var y = map(this.r, 0, howlong / 10, 0, 25);
    //ellipse(x, y, 15, 15);
    //i dont like how it changes the Y...i want that to stay 
    ellipse(x, h, 15, 15);

  }


  this.clickedgraph = function() {
    var x = map(this.time, 0, globalTime, 0, width);
    var h = map(this.r, 0, 200, height, 0);
    var e = dist(mouseX, mouseY, x, h);
    if (e < 7.5  && mouseIsPressed) {
      fill(0, 99, 99);
      textAlign(CENTER);
      text(this.txt, x, h);

    }

  }

  //DRAW BARK ART
  this.display = function() {

    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r + this.r / 15, this.r);

    //paw fingers
    ellipse(this.x - (this.r / 2), this.y - (this.r / 1.8), this.r * .35, this.r * .40);
    ellipse(this.x, this.y - (this.r / 1.3), this.r * .35, this.r * .40);
    ellipse(this.x + (this.r / 2), this.y - (this.r / 1.8), this.r * .35, this.r * .40);

  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r * .40 && mouseIsPressed) {
      fill(0);
      textAlign(CENTER);
      text(this.txt, this.x, this.y);

    }

  }


}