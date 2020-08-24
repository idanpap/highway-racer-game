class Game {
    constructor() {
      this.obstacles = []
    }
    
    preloadGame() {
      this.backgroundImgs = [{
        src: loadImage("2D Traffic Racer Assets/road cropped.png"), y:0, speed: 2
      }]
      this.playerImg = loadImage("2D Traffic Racer Assets/userCar.png");
      this.carImg = loadImage("2D Traffic Racer Assets/croppedObstacleCar.png");
      this.orangeCarImg = loadImage("2D Traffic Racer Assets/orangeCarObstacle.png");
    }
    
    setupGame() {
      // this.obstacle = new Obstacle()
      // this.obstacle.image = this.carImg;
      this.background = new Background ();
      this.background.images = this.backgroundImgs
      this.player = new Player();
      this.player.image = this.playerImg;
    }
    
    drawGame() {
      clear();
      this.background.drawBackground()
      this.player.drawPlayer()
      
      if (frameCount % 90 === 0) {
        this.obstacles.push(new Obstacle(this.carImg))
      }
      
      if (frameCount % 120 === 0) {
        this.obstacles.push(new Obstacle(this.orangeCarImg))
      }

      
  
      this.obstacles.forEach(obstacle => {
        obstacle.drawObstacle();
      })
      
      this.obstacles = this.obstacles.filter((obstacle) => {
        if(obstacle.collision(this.player)) {
          return false
        } else {
          return true
        }
      })

    }
    
  }

  