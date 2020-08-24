class Game {
    constructor() {
    }
    
    preloadGame() {
      this.backgroundImgs = [{
        src: loadImage("2D Traffic Racer Assets/road.png"), x:0, speed: 1
      },
      {
        src: loadImage("2D Traffic Racer Assets/road.png"), x:20, speed: 1
      }
    ];
    }
    
    setupGame() {
      this.background = new Background ();
      this.background.images = this.backgroundImgs
    }
    
    drawGame() {
      this.background.drawBackground()
    }
    
  }
  