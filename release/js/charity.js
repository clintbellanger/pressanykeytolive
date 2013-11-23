/**
 Handle the charity button
 and credits hotlink
*/

var charity = new Object();

charity.init = function() {

  charity.url = "https://donate.heart.org";
  charity.delay = 240;
  charity.counter = 0;
  charity.button_area = {x1:32, x2:288, y1:176, y2:240};
  charity.displayed = false;

  charity.img = new Image();
  charity.img_loaded = false;

  charity.img.onload = function() {
    charity.img_loaded = true;
  }
  charity.img.src = "images/charity.png";

}

charity.logic = function() {

  // a short pause before the charity link displays in the end
  if (charity.counter < charity.delay) {
    charity.counter++;
    return;
  }

  if (!input_lock.anykey && pressing.anykey) {
    if (isWithin(mouse_pos, charity.button_area)) {

      // forward to charity link
      window.location = charity.url;
    }
  }
    
}

charity.render = function() {
  if (charity.displayed) return;
  if (charity.counter < charity.delay) return;

  ctx.drawImage(
    charity.img,
    0,
    0,
    256,
    64,	
    32 * SCALE,
    176 * SCALE,
    256 * SCALE,
    64 * SCALE
  );

  charity.displayed = true;
}
