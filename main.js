img = "";
status = "";
objects = [];


function preload(){
  img = loadImage('IMG-8972.jpg');
  img = loadImage('IMG-8973.jpg');
  img = loadImage('IMG-8974.jpg');
  img = loadImage('IMG-8975.jpg');
  img = loadImage('IMG-8976.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 640, 420);

      if(status != "")
      {
        for (i = 0; i < objects.length; i++)
        {
          document.getElementById("status").innerHTML = "Status : Object Detected";

          fill("#FF0000");
          percent = floor(object[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("FF0000");
          rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
  fill("#FF0000");
  text("Jumper", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350 );

  fill("#FF0000");
  text("jacket", 320, 120);
  noFill();
  stroke("#FF0000");
  rect(300, 90, 270, 320 );
}

