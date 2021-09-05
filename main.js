status = "";

objects = [];

function preload(){

}

function setup(){
    canvas = createCanvas(480,380);
    canvas.position(600,350);

    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    console.log("check");
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded(){
    console.log("cocossd is loaded");
    status = true;
}
