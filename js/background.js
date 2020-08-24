class Background {
    constructor() {
      // define the image array here
      this.y = 0
      this.images;
    }
  
    drawBackground() {
      this.y--
      // define the draw logic  for the moving background here
  
      this.images.forEach((picture) => {
        picture.x += picture.speed;
        image(picture.src, 0, this.y ,width, height);
        image(picture.src, 0, this.y - height,width, height);
  
        // if (picture.y < 0) {
        //   picture.y = height;
        // }
      });
    }
  }