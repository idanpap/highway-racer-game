class Game {
    constructor() {
    }
    
    preloadGame() {
      this.backgroundImgs = [{
        src: loadImage("2D Traffic Racer Assets/road cropped.png"), y:0, speed: 2
      }]
      this.playerImg = loadImage("2D Traffic Racer Assets/userCar.png")
    }
    
    setupGame() {
      this.background = new Background ();
      this.background.images = this.backgroundImgs
      this.player = new Player();
      this.player.image = this.playerImg;
    }
    
    drawGame() {
      this.background.drawBackground()
      this.player.drawPlayer()
    }
    
  }

  