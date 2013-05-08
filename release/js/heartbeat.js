/**
 * Heartbeat mini-game
 * Press heart beats to the rhythm
 * Three strikes to lose
 * A success removes one strike
 */
 
var HEART_ICON_SIZE = 20;



var heartbeat = new Object();

heartbeat.img = new Image();
heartbeat.img_loaded = false;

function heartbeat_init() {
  heartbeat.img.src = "images/heart.png";
  heartbeat.img.onload = function() {heartbeat_onload();};
}

function heartbeat_onload() {
  heartbeat.img_loaded = true;
}

function heartbeat_logic() {

}

function heartbeat_render() {
  heartbeat_render_icon(0, 20, 100);
}

function heartbeat_render_icon(icon_id, draw_x, draw_y) {

  ctx.drawImage(
    heartbeat.img,
    icon_id * HEART_ICON_SIZE * PRESCALE,
    0,
    HEART_ICON_SIZE * PRESCALE,
    HEART_ICON_SIZE * PRESCALE,	
    draw_x * SCALE,
    draw_y * SCALE,
    HEART_ICON_SIZE * SCALE,
    HEART_ICON_SIZE * SCALE
  );
}
