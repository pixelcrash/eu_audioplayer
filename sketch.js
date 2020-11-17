let counter = 0;
let rest = 0;
let track = "";
let mySound;
let canvas;
let isPlaying = 0;
let duration;
let currentTime;
let playPosition = 0;
let pausedAt = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  track = document.getElementById("trackUrl").value;
  mySound = loadSound(track);
  duration = int(mySound.duration());
  currentTime = 0;
}

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight, P2D);
  canvas.parent('ue-audio-p5-player');
  rest = windowWidth/2;
  track = getTrack();
  
}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight);
  counter = 0;
  rest = windowWidth/2;
}

function draw() {
 canvas.mousePressed(canvasPressed);
 background(220);
 fill(0);
 noStroke();
 
 if(!mySound.isPlaying()){
   playPosition = (windowWidth/2 / int(mySound.duration())) * int(pausedAt);
 }else{
   playPosition = (windowWidth/2 / int(mySound.duration())) * int(mySound.currentTime());
 }
 
 showDuration();
 //changeText(mySound.duration());
 rect(0,0, playPosition, windowHeight);
 
 if(counter == rest){
   counter = 0;
 }else{
  
 }
}

function canvasPressed(){
  
  if(mySound.isPlaying()){
    mySound.pause();
    isPlaying = 0;
    pausedAt = mySound.currentTime();
    console.log("Paused");
    
  }else{
    mySound.play();
    isPlaying = 1;
    console.log("Playing");
    
  }
  
}

function leadingZeroTime(value){
  return nf(value, 2, 0);
}

function showDuration(){
  let currentTimeTrack;
  let currentTimePerc = (mySound.currentTime() / mySound.duration()) * width;
  currentTimeTrack = int(mySound.duration()) - int(mySound.currentTime());
  text(leadingZeroTime(floor(mySound.currentTime() / 60)) + ':' + leadingZeroTime(floor(mySound.currentTime() % 60)) + ' / ' + leadingZeroTime(floor(mySound.duration() / 60)) + ':' + leadingZeroTime(floor(mySound.duration() % 60)), repairTimerPosition(currentTimePerc - 43), 25, 86);
  
  document.getElementById("currentTime").innerHTML = currentTimeTrack;
}

function getTrack(){
  track = document.getElementById("trackUrl").value;
  return track;
}









