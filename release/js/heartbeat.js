/**
 * Heartbeat mini-game
 * Press heart beats to the rhythm
 * Three strikes to lose
 * A success removes one strike
 */

// magic number consts 
var HEART_ICON_SIZE = 20;

var heartbeat = new Object();

// image handling
heartbeat.img = new Image();
heartbeat.img_loaded = false;

// animation handling
heartbeat.cursor_x = 220;
heartbeat.offset_x = 0;
heartbeat.offset_y = 0;
heartbeat.shake_timer = 0;
heartbeat.success = false;
heartbeat.success_this_pass


function heartbeat_init() {
  heartbeat.img.src = "images/heart.png";
  heartbeat.img.onload = function() {heartbeat_onload();};
}

function heartbeat_onload() {
  heartbeat.img_loaded = true;
}

function heartbeat_logic() {
  heartbeat.success = false;
  
  // animate cursor  
  heartbeat.cursor_x -= 2;
  if (heartbeat.cursor_x == 80) heartbeat.cursor_x = 220;
  
  // check for input
  if (pressing.anykey && !input_lock.anykey) {
    
	input_lock.anykey = true;
	
	// if the cursor overlaps the heart AT ALL, success
	if (heartbeat.cursor_x < 120 && heartbeat.cursor_x > 80) {
	  heartbeat.success = true;
	}
    // otherwise
    else {
      heartbeat.shake_timer = 12;
    }
  }
  
  // handle shaking the heartbeat due to failure
  if (heartbeat.shake_timer > 0) {
    heartbeat.shake_timer --;
	heartbeat.offset_x = Math.floor(Math.random() * 5) - 2;
	heartbeat.offset_y = Math.floor(Math.random() * 5) - 2;
  }
  else {
    heartbeat.offset_x = 0;
	heartbeat.offset_y = 0;
  }
}

function heartbeat_render() {

  // clear heartbeat background
  ctx.fillStyle = "#140c1c";
  ctx.fillRect(100*SCALE,200*SCALE,120*SCALE,40*SCALE);
  
  // show heart
  if (heartbeat.success)
    heartbeat_render_icon(2, 100, 208);  
  else
    heartbeat_render_icon(0, 100, 210);
  
  // show cursor
  heartbeat_render_icon(1, heartbeat.cursor_x, 210);
  
  // lazy/fast clip of cursor
  ctx.fillRect(80*SCALE,200*SCALE,20*SCALE,40*SCALE);
  ctx.fillRect(220*SCALE,200*SCALE,20*SCALE,40*SCALE);

}

function heartbeat_render_icon(icon_id, draw_x, draw_y) {

  ctx.drawImage(
    heartbeat.img,
    icon_id * HEART_ICON_SIZE * PRESCALE,
    0,
    HEART_ICON_SIZE * PRESCALE,
    HEART_ICON_SIZE * PRESCALE,	
    (draw_x + heartbeat.offset_x) * SCALE,
    (draw_y + heartbeat.offset_y) * SCALE,
    HEART_ICON_SIZE * SCALE,
    HEART_ICON_SIZE * SCALE
  );
}
