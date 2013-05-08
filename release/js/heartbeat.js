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
heartbeat.beat_timer = 0;

// The game doesn't begin until the player gets the first successful press.
heartbeat.first_success = false;

// Failure happens when beating the heart incorrectly or missing a beat entirely
// A success erases one failure.
// Accumulating three failures is game over.
heartbeat.failure_count = 0;

// If there was a success this pass, set to true.
// If the pass ends without a success (missed beat) or a failure, add one failure.
heartbeat.successful_pass = false;
heartbeat.failed_pass = false;


//---- Initialize ---------------------

function heartbeat_init() {
  heartbeat.img.src = "images/heart.png";
  heartbeat.img.onload = function() {heartbeat_onload();};
}

function heartbeat_onload() {
  heartbeat.img_loaded = true;
}

//---- Logic --------------------------

function heartbeat_logic() {
  
  heartbeat_logic_animate();
  heartbeat_logic_anykey();
  
  // check for failure
  if (heartbeat.failure_count >= 4) gamestate = STATE_GAMEOVER;
}

function heartbeat_logic_anykey() {

  // check for input
  if (pressing.anykey && !input_lock.anykey) {
    
	input_lock.anykey = true;
	
	// SUCCESS if the cursor overlaps the heart at all
	if (heartbeat.cursor_x < 140 && heartbeat.cursor_x > 100 && !heartbeat.successful_pass) {
	
	  if (!heartbeat.first_success) {
	    heartbeat.first_success = true;
	    gamestate = STATE_PLAY;
	  }
	  heartbeat.beat_timer = 8;
	  heartbeat.successful_pass = true;
	  
	  if (heartbeat.failure_count > 0) heartbeat.failure_count--;
	  
	  sounds_play(SFX_BEAT);
	  
	}
    // otherwise
    else {
      heartbeat.shake_timer = 12;
	  heartbeat.failed_pass = true;
	  
	  sounds_play(SFX_MISS);
	  
	  // if the player already knows how to play, deduct points
	  if (heartbeat.first_success) {
	    heartbeat.failure_count++;
	  }
    }
  }
  
}

function heartbeat_logic_animate() {

  // animate cursor  
  heartbeat.cursor_x -= 2;
  
  // handle cursor wrap
  if (heartbeat.cursor_x == 80) {
    heartbeat.cursor_x = 220;
	
	// did not beat at all this turn
	if (heartbeat.first_success == true && heartbeat.successful_pass == false && heartbeat.failed_pass == false) {
	  heartbeat.failure_count++;	
	}
	
	heartbeat.successful_pass = false;
	heartbeat.failed_pass = false;
  }

  // handle shaking the heartbeat due to failure
  if (heartbeat.shake_timer > 0) {
    heartbeat.shake_timer--;
	heartbeat.offset_x = Math.floor(Math.random() * 5) - 2;
	heartbeat.offset_y = Math.floor(Math.random() * 5) - 2;
  }
  else {
    heartbeat.offset_x = 0;
	heartbeat.offset_y = 0;
  }
  
  // handle beat animation
  if (heartbeat.beat_timer > 0) {
    heartbeat.beat_timer --;
  }
  
}

//---- Render -------------------------

function heartbeat_render() {

  // clear heartbeat background
  ctx.fillStyle = "#140c1c";
  ctx.fillRect(100*SCALE,200*SCALE,120*SCALE,40*SCALE);
  
  // show heart
  if (heartbeat.beat_timer > 0)
    heartbeat_render_icon(2, 120, 208);  
  else
    heartbeat_render_icon(0, 120, 210);
  
  // show cursor
  heartbeat_render_icon(1, heartbeat.cursor_x, 210);
  
  // lazy/fast clip of cursor
  ctx.fillRect(70*SCALE,200*SCALE,30*SCALE,40*SCALE);
  ctx.fillRect(220*SCALE,200*SCALE,30*SCALE,40*SCALE);

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
