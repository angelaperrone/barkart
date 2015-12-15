var barks = [];
var graphbarks = [];
var barking;
var barkLevel = 0.3;
var threshold = 0.05;
var threshold2 = 0.01;
var barkingNow = false;
var txt;
var lastBark;

var startTime = 0;
var stopTime = 0;
var howlong = 0;

var button1;
var barkGraph = false;

var canvas;
var button2;
var saveClick = false;

var button3;
var pausePause = false;

var frame;
var paintcan;

var globalTime;
var graphMove = true;

function preload() {
  frame = loadImage("Frame.png");
  paintcan = loadImage("paintcan.png");
}

// var d = new Date();
// var newX = d.getTime();

function setup() {
  canvas = createCanvas(1000, 700);


  //background(0, 100, 229);

  button1 = createButton('bark data');
  button1.mousePressed(seeData);
  button1.position(895, 585);
  //microph on

  button2 = createButton('save BarkArt');
  button2.mousePressed(saveBarkArt);
  button2.position(890, 650);


  button3 = createButton('end');
  button3.mousePressed(stopAction);
  button3.position(915, 675);

  barking = new p5.AudioIn
  barking.start();


}


function draw() {
  background(255);

  var vol = barking.getLevel();
  if (graphMove) {
    globalTime = millis();}

  if (vol > threshold && !barkingNow) {

    var newBark = new BarkMark(random(25, 975), random(25, 675), vol);
    barks.push(newBark); //a new bark is being pushed out into/added into the array

    barkingNow = true;

    startTime = millis();

  } else if (barkingNow && vol < threshold2) {
    barkingNow = false;

    stopTime = millis();

    howlong = stopTime - startTime;


    // look at last bark object in array
    // give it the data with howlong



    var lastBark = barks.length - 1;

    //console.log(howlong);

  }

  if (barkGraph) {
    background(0);
    for (i = 0; i < barks.length; i++) {
      barks[i].drawGraph();
      barks[i].clickedgraph();
    }


  } else {
    for (i = 0; i < barks.length; i++) {
      barks[i].display();
      barks[i].clicked();
    }

    image(frame, 0, 0);
    image(paintcan, 845, 462)

  }

}


//create button that goes to graph data
function seeData() {
  if (barkGraph == true) {
    barkGraph = false;
    button1.html('bark data');
  } else if (barkGraph == false) {
    barkGraph = true;
    button1.html('bark art');
  }
}

function saveBarkArt() {
  saveCanvas(canvas, 'BarkArt', 'jpg');

}

function stopAction() {
  barking.stop();
  graphMove = false;
  
  // if (pausePause == true) {
  //   pausePause = false;
  //   button3.html('pause')
  // } else if (pausePause == false) {
  //   pausePause = true;
  //   button3.html('resume')
  // }
}