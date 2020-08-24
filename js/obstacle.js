class Obstacle {
    constructor(img) {
      this.height = 90;
      this.width = 60;
      this.x = (Math.random() * width) / 1.2;
      this.y = 0;
      this.image = img;
    }
  
    collision(playerInfo) {
      let obstacleX = this.x + this.width/2;
      let obstacleY = this.y + this.height/2;
      let playerX = playerInfo.x + playerInfo.width/2;
      let playerY = playerInfo.y + playerInfo.width/2;
      
      if (dist(obstacleX, obstacleY, playerX, playerY) < 45) {
        // return true;
        alert('you have failed, you may as well give up now')
        
      } 
    //   alert('you have failed')
    }
  
    drawObstacle() {
       this.y += 4;
    //    if (frameCount %  10 === 0) {
    //     this.y += 8;
    //     console.log(this.y)
    //   }
       
      image(this.image, this.x, this.y, this.width, this.height)
    }
  }
  