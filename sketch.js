
//here we declare our sound source using the players tone object

 //adding delay object

 let button1;
 let button2;
 let button3;
 let button4;
 let delaySlider;





 let sounds = new Tone.Players({
  Guitar: "sound/guitar.mp3",
  Melody: "sound/melody.mp3",
  Horror: "sound/horror.mp3",
  Rock808: "sound/rock808.mp3"

  

 }).toDestination();



let delay = new Tone.FeedbackDelay ("8n", 0.5);
 
 sounds.connect(delay);
 delay.toDestination();

 
 function setup() {
   createCanvas(600, 600);
  
   button1 = createButton('Guitar');
   button1.position(85, 150);
   button1.mousePressed(() =>sounds.player('Guitar').start()); 
   
   button2 = createButton('Melody');
   button2.position(205, 150);
   button2.mousePressed(() =>sounds.player('Melody').start());

   button3 = createButton('Spooky');
   button3.position(305, 150);
   button3.mousePressed(() =>sounds.player('Horror').start());

   button4 = createButton('Beats');
   button4.position(405, 150);
   button4.mousePressed(() =>sounds.player('Rock808').start());
 
   delaySlider = createSlider (0., 1., 0.5, 0.05);
   delaySlider.position (120,250);
   delaySlider.mouseMoved(() => delay.delayTime.value = delaySlider.value());
   
 }
 
 
 function draw() {
   background(50, 200, 200);
   text ("Add delay with slider", 130, 300);
 }