class Game {
    constructor() {
    }
    
    preloadGame() {
      this.backgroundImgs = [{
        src: loadImage("2D Traffic Racer Assets/road cropped.png"), y:0, speed: 2
      }]
      
    }
    
    setupGame() {
      this.background = new Background ();
      this.background.images = this.backgroundImgs
    }
    
    drawGame() {
      this.background.drawBackground()
    }
    
  }

  