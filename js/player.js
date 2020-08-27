class Player {
    constructor() {
      this.height = 60;
      this.width = 90;
      this.x = 270 ;
      this.y = 500;
  
      this.image;
      this.collisionImg;
    }

    moveRight() {
        if (this.x < 500) {
            this.x += 115;
        }
    }

    moveLeft() {
        if (this.x > 40) {
            this.x -= 115;
        }
    }


    drawPlayer() {
      image(this.image, this.x, this.y, this.height, this.width)
    }
  
  }
  