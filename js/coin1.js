class Coin1 {
    constructor(img) {
      this.height = 40;
      this.width = 40;
      this.positioning = [40, 155, 270, 385, 500]
    //   this.x = Math.random() * ((560 - 40) + 40)/1.5;
      this.x = this.positioning[Math.floor(Math.random() * 5) + 0 ]
      this.y = -20;
      this.image = img;
    }
  
    collision(playerInfo) {
      let coin1X = this.x + this.width/2;
      let coin1Y = this.y + this.height/2;
      let playerX = playerInfo.x + playerInfo.width/2;
      let playerY = playerInfo.y + playerInfo.width/2;
      
      if (dist(coin1X, coin1Y, playerX, playerY) < 55) {

        return true;
        // alert('you have failed, you may as well give up now')
        
      } 
    }
  
    drawCoin1() {
       this.y += 8;
       if (frameCount %  2 === 0) {
        this.y += 0.5;
      }
       
      image(this.image, this.x, this.y, this.width, this.height)
    }
  }