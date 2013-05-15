function resizeCanvas() {
  if (!STRETCH_TO_SCREEN) {
    
	can.width = 320 * SCALE;
	can.height = 240 * SCALE;
	redraw = true;
	
	return;
  }

  var aspect_ratio = 4/3;
    
  // the screen is wider than 4:3
  if (window.innerWidth * (3/4) > window.innerHeight) {  
    can.height = window.innerHeight;
    can.width = can.height * aspect_ratio;
    SCALE = can.height / 240;
  }
  // the screen is taller than 4:3
  else {
    can.width = window.innerWidth;
	can.height = can.width / aspect_ratio;
	SCALE = can.width / 320;
  }
  
  slides.redraw = true;
  display_title = false;
  display_ending = false;  
  
  setNearestNeighbor();
}

function setNearestNeighbor() {
  ctx.imageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.mozImageSmoothingEnabled = false;
  ctx.oImageSmoothingEnabled = false;  
}

