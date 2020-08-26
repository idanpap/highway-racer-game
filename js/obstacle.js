class Obstacle {
    constructor(img) {
      this.height = 90;
      this.width = 60;
      this.x = 40
      this.y = -20;
      this.image = img;
    }
  
    collision(playerInfo) {
      let obstacleX = this.x + this.width/2;
      let obstacleY = this.y + this.height/2;
      let playerX = playerInfo.x + playerInfo.width/2;
      let playerY = playerInfo.y + playerInfo.width/2;
      
      if (dist(obstacleX, obstacleY, playerX, playerY) < 60) {
        return true;
        // alert('you have failed, you may as well give up now')
        
      } 
    }
  
    drawObstacle() {
      this.y += 4;
      if (frameCount %  2 === 0) {
       this.y += 0.5;
     }
      // }
      // if (frameCount >  800) {
      //   this.y += 2;
      // }
      // if (frameCount >  1200) {
      //   this.y += 2;
      // }
      
       
      image(this.image, this.x, this.y, this.width, this.height)
    }
  }
  