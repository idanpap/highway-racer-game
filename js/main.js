const game = new Game();
let mode;
let img;
let sound;

function preload() {
    game.preloadGame();
    img = loadImage("2D Traffic Racer Assets/CarRacingGIF.gif");
    sound = loadSound("2D Traffic Racer Assets/POL-its-a-blast-short.wav")
}
function setup() {
    mode = 0;
    const canvas = createCanvas(600,600);
    canvas.parent('sketch-holder');
    game.setupGame();
    
}
function draw() {
    if (mode ===0) {
        // text('Press enter to start', 150, 300)
        textSize(42)
        image(img, 30, 90, 1000, 800);
        
        text(`Press enter to start`, 150, 300)
        fill(252, 162, 58)

        
        
    }
    if (mode === 1) {
    game.drawGame();
    }
}

function keyPressed() {
    if (keyCode === 13){
        sound.loop()
        mode = 1;
    }
    
    if (keyCode === 37) {
        // console.log()
      game.player.moveLeft();
    }
  
    if (keyCode === 39) {
        // console.log()
      game.player.moveRight();
    }
}
