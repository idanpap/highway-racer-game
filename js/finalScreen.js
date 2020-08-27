class FinalScreen {
    constructor() {
        this.height = 600;
        this.width = 600;
        this.x = 0;
        this.y = 0;
        this.image;
      }
  
    drawScreen() {
        image(this.image, this.x, this.y, this.height, this.width);
      noLoop();
      setTimeout(function() {
        loop();
      }, 1000);
    }
  }