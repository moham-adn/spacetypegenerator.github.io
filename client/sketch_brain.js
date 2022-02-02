var pg = [];
var pgPlus = [];

var bkgdColor;

var x = [];
var xTarget = [];
var xHold = [];
var y = [];
var yTarget = [];
var yHold = [];
var z = [];
var zTarget = [];
var zHold = [];
var label = []

var a = [];
var aTarget = [];
var aHold = [];

var xNudge = [];
var yNudge = [];
var label = []

var animOn = false;

var animLength = 24;
var animStart = 0;
var animStop = 0;

var currentState = 6;

var font1;

var cullSpace = 0.1;

var partCount = 16;

function preload(){
  pg[0] = loadImage("resources/brain/0brainBkgd.png");

  pg[1] = loadImage("resources/brain/2_oLines.png");
  pg[2] = loadImage("resources/brain/2_locus.png");
  pg[3] = loadImage("resources/brain/2_anteriorCing.png");
  pg[4] = loadImage("resources/brain/2_lgn.png");
  pg[5] = loadImage("resources/brain/2_entorhinal.png");
  pg[6] = loadImage("resources/brain/2_hippocampus.png");

  pg[7] = loadImage("resources/brain/1_cerebellum.png");
  pg[8] = loadImage("resources/brain/1_visualcortex.png");
  pg[9] = loadImage("resources/brain/1_frontal.png");
  pg[10] = loadImage("resources/brain/1_occipital.png");
  pg[11] = loadImage("resources/brain/1_parietal.png");
  pg[12] = loadImage("resources/brain/1_prefrontal.png");
  pg[13] = loadImage("resources/brain/1_temporal.png");
  pg[14] = loadImage("resources/brain/1_auditory.png");

  pg[15] = loadImage("resources/brain/0eye.png");

  pgPlus[1] = loadImage("resources/brain/3plus_oLines.png");
  pgPlus[2] = loadImage("resources/brain/3plus_locus.png");
  pgPlus[3] = loadImage("resources/brain/3plus_anteriorCing.png");
  pgPlus[4] = loadImage("resources/brain/3plus_lgn.png");
  pgPlus[5] = loadImage("resources/brain/3plus_entorhinal.png");
  pgPlus[6] = loadImage("resources/brain/3plus_hippocampus.png");
  pgPlus[8] = loadImage("resources/brain/3plus_visualcortex.png");
  pgPlus[12] = loadImage("resources/brain/3plus_prefrontal.png");
  pgPlus[14] = loadImage("resources/brain/3plus_auditory.png");
  pgPlus[15] = loadImage("resources/brain/0eye.png");

  font1 = loadFont("resources/SpaceMono-Bold.ttf");
}

function setup(){
  let renderer = createCanvas(1000,800,WEBGL);
  renderer.drawingContext.disable(renderer.drawingContext.DEPTH_TEST);

  bkgdColor = color("#ffffff");
  foreColor = color("#000000");

  frameRate(24);

  for(var k = 0; k<partCount; k++){
    x[k] = 0;
    xTarget[k] = 0;
    xHold[k] = 0;
    y[k] = 0;
    yTarget[k] = 0;
    yHold[k] = 0;
    z[k] = 0;
    zTarget[k] = 0;
    zHold[k] = 0;
    a[k] = 0;
    aTarget[k] = 0;
    aHold[k] = 0;

    animOn[k] = false;

    xNudge[k] = 0;
    yNudge[k] = 0;
  }

  label[1] = "Frontal";
  label[2] = "Parietal";
  label[3] = "Occipital";
  label[4] = "Temporal";
}

function draw(){
  background(bkgdColor);
  // background(200);
  // orbitControl();

  if(animOn){
    animater();
  }

  textFont(font1);
  textSize(20);

  push();
    scale(0.85);
    translate(x[0], y[0], z[0]);
    image(pg[0],-width/2,-height/2);

    translate(0,0,1);

    for(var k = 1; k<partCount; k++){
      push();
        translate(x[k], y[k], z[k] + k*cullSpace);

        translate(0,0,1);
        tint(255,255)
        image(pg[k],-width/2,-height/2);

        // tint(255, a[k]);
        // image(pgPlus[k],-width/2,-height/2);

        // translate(xNudge[k], yNudge[k] + 62 - a[k]/4, 1);
        // noStroke(); fill(84,165,236,a[k]);
        // rect(0,0,120,30);
        // fill(255,a[k]);
        // text(label[k],5,25);
      pop();
    }

    for(var k = 1; k<partCount; k++){
      if(pgPlus[k] != null){
        push();
          translate(x[k], y[k], z[k] + k*cullSpace);

          tint(255, a[k]);
          image(pgPlus[k],-width/2,-height/2);
        pop();
      }
    }
  pop();

  if(frameCount < 2){
    noLoop();
  }

  // textFont(font1);
  // fill(foreColor);
  // text(frameCount, width/2 - 50, 50);
}
