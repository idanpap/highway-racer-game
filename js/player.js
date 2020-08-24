class Player {
    constructor() {
      this.height = 60;
      this.width = 90;
      this.x = 40 ;
      this.y = 500;
  
      this.image;
    }

    moveRight() {
        this.x += 115;
    }

    moveLeft() {
        this.x -= 115;
    }
    drawPlayer() {
      image(this.image, this.x, this.y, this.height, this.width)
    }
  
  }
  