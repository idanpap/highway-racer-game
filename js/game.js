class Game {
    constructor() {
      this.obstacles = [];
      this.trucks = [];
      this.coins1 = [];
      this.coins5 = [];
      this.score = 0;
      this.screen = [];
      this.winScreen = [];
    }
    
    preloadGame() {
      this.backgroundImgs = [{
        src: loadImage("2D Traffic Racer Assets/road cropped.png"), y:0, speed: 1
      }]
      this.playerImg = loadImage("2D Traffic Racer Assets/userCar.png");
      this.carImg = loadImage("2D Traffic Racer Assets/croppedObstacleCar.png");
      this.orangeCarImg = loadImage("2D Traffic Racer Assets/orangeCarObstacle.png");
      this.racingCarImg = loadImage("2D Traffic Racer Assets/racingCarBrown.png");
      this.truckImg = loadImage("2D Traffic Racer Assets/redTruck.png");
      this.coin1Img = loadImage("2D Traffic Racer Assets/coin.png");
      this.coin5Img = loadImage("2D Traffic Racer Assets/coin5.png");
      this.endGameImg = loadImage("2D Traffic Racer Assets/carStuck.png");
      this.winGameImg = loadImage("2D Traffic Racer Assets/confettiNoEdit (1).png");
      this.crashSound = loadSound("2D Traffic Racer Assets/Explosion+3.mp3");
    }
    
    setupGame() {
      this.background = new Background ();
      this.background.images = this.backgroundImgs
      this.player = new Player();
      this.player.image = this.playerImg;
      this.screen = new FinalScreen();
      this.screen.image = this.endGameImg;
      this.winScreen = new WinScreen();
      this.winScreen.image = this.winGameImg;
    }
    
    drawGame() {
      clear();
      this.background.drawBackground()
      this.player.drawPlayer()

      
      
      if (frameCount % 220 === 0) {
        this.obstacles.push(new Obstacle(this.carImg))
      }

      if (frameCount % 125 === 0) {
        this.obstacles.push(new Obstacle(this.orangeCarImg))
      }

      if (frameCount % 243 === 0) {
        this.obstacles.push(new ObstacleLane3(this.racingCarImg))
      }

      if (frameCount % 199 === 0) {
        this.obstacles.push(new ObstacleLane3(this.orangeCarImg))
      }

      if (frameCount % 170 === 0) {
        this.obstacles.push(new ObstacleLane5(this.orangeCarImg))
      }

      if (frameCount % 250 === 0) {
        this.obstacles.push(new ObstacleLane5(this.carImg))
      }

      if (frameCount % 139 === 0) {
        this.trucks.push(new TruckObstacle(this.truckImg))
      }

      if (frameCount % 178 === 0 && frameCount > 2300) {
        this.trucks.push(new TruckObstacle(this.truckImg))
      }

      if (frameCount % 369 === 0) {
        this.coins1.push(new Coin1(this.coin1Img))
      }
      if (frameCount % 470 === 0) {
        this.coins5.push(new Coin5(this.coin5Img))
      }
      if (frameCount > 2500 && frameCount % 99 === 0 ) {
        this.obstacles.push(new Obstacle(this.carImg))
      }

      
  
      this.obstacles.forEach(obstacle => {
        obstacle.drawObstacle();
      })

      this.trucks.forEach(obstacle => {
        obstacle.drawTruckObstacle();
      })

      this.coins1.forEach(coin => {
        coin.drawCoin1();
      })

      this.coins5.forEach(coin => {
        coin.drawCoin5();
      })

      this.coins5 = this.coins5.filter((coin) => {
        if(coin.collision(this.player)) {
          this.score += 2500
          document.querySelector('h2 span').innerHTML = `€${this.score}`;
          if (this.score >= 7500) {
            frameRate(0);
            this.winScreen.drawScreen();
            // alert(`You won! You raised enough cash to join Ironhack. Click on ok and then new game to start again`)
          }
          return false
        } else {
          return true
        }
      })

      this.coins1 = this.coins1.filter((coin) => {
        if(coin.collision(this.player)) {
          this.score += 1000
          document.querySelector('h2 span').innerHTML = `€${this.score}`;
          if (this.score >= 7500) {
            frameRate(0);
            this.winScreen.drawScreen();                     
          }
          return false
        } else {
          return true
        }
      })

      this.trucks = this.trucks.filter((truck) => {
        if(truck.collision(this.player)) {
          this.crashSound.play()
          frameRate(0);
          this.screen.drawScreen();
          // alert(`You crashed! You collected €${this.score}, which is not enough for Ironhack. Press okay and then new game to start again.`)
            return false
        } else {
            return true
        }
      })
      
      this.obstacles = this.obstacles.filter((obstacle) => {
        if(obstacle.collision(this.player)) {
          this.crashSound.play()
          frameRate(0);
          this.screen.drawScreen();
          // alert(`You crashed! You collected €${this.score}, which is not enough for Ironhack. Press okay and then new game to start again.`)
          return false
        } else {
          return true
        }
      })

    }
    
  }

  