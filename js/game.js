class Game {
    constructor() {
      this.obstacles = [];
      this.trucks = [];
      this.coins1 = [];
      this.coins5 = [];
      this.score = 0;
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
      this.coin5Img = loadImage("2D Traffic Racer Assets/coin5.png")
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

      
      
      if (frameCount % 291 === 0) {
        this.obstacles.push(new Obstacle(this.carImg))
      }
      // if (frameCount % 60 === 0) {
        // console.log(`second is : ${second()} and frame is ${frameCount}`)
      // }
      if (frameCount % 163 === 0) {
        this.obstacles.push(new Obstacle(this.orangeCarImg))
      }

      if (frameCount % 114 === 0) {
        this.obstacles.push(new Obstacle(this.racingCarImg))
      }

      if (frameCount % 231 === 0) {
        this.trucks.push(new TruckObstacle(this.truckImg))
      }

      if (frameCount % 411 === 0) {
        this.coins1.push(new Coin1(this.coin1Img))
      }
      if (frameCount % 924 === 0) {
        this.coins5.push(new Coin5(this.coin5Img))
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
          this.score += 5
          document.querySelector('h2 span').innerHTML = this.score;
          if (this.score >= 25) {
            frameRate(0);
            // alert(`After collecting ${this.score} points you have won! Please click on ok to restart`)
            // location.reload()
          }
          return false
        } else {
          return true
        }
      })

      this.coins1 = this.coins1.filter((coin) => {
        if(coin.collision(this.player)) {
          this.score += 1
          document.querySelector('h2 span').innerHTML = this.score;
          if (this.score >= 25) {
            frameRate(0);
            // alert(`After collecting ${this.score} points you have won! Please click on ok to restart`)
            // location.reload()
          }
          return false
        } else {
          return true
        }
      })

      this.trucks = this.trucks.filter((truck) => {
        if(truck.collision(this.player)) {
          // this.score -= 10
          // document.querySelector('h2 span').innerHTML = this.score;
          // if (this.score < 0) {
            frameRate(0);
            // alert('Game over! Click on ok to start again :)')
            // location.reload()
          // }
          return false
        } else {
          return true
        }
      })
      
      this.obstacles = this.obstacles.filter((obstacle) => {
        if(obstacle.collision(this.player)) {
          // this.score -= 5
          // document.querySelector('h2 span').innerHTML = this.score;
          // if (this.score < 0) {
            frameRate(0);
            // alert('Game over! Click on ok to start again :)')
            // location.reload()
          // }
          return false
        } else {
          return true
        }
      })

    }
    
  }

  