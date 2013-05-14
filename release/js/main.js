// html elements
var can;     // canvas
var ctx;     // context
var FPS = 60;

//---- Main Loop --------------------------------------------------

setInterval(function() {
  logic();
  render();
}, 1000/FPS);

//---- Logic Function ---------------------------------------------

function logic() {
  gamestate_logic();
}

//---- Render Function ---------------------------------------------

function render() {
  gamestate_render();
}

//---- Init Function -----------------------------------------------

function init() {

  can = document.getElementById("gamecanvas");
  if (can.getContext) {
    ctx = can.getContext("2d");
  }
    
  resizeCanvas();

  if (window.addEventListener) {
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
	window.addEventListener('mousedown', handleMouseDown, true);
	window.addEventListener('mouseup', handleMouseUp, true);
	window.addEventListener('touchstart', handleTouchStart, true);
	window.addEventListener('touchend', handleTouchEnd, true);
	window.addEventListener('resize', resizeCanvas, false);
	window.addEventListener('orientationchange', resizeCanvas, false);
  }
  
  // initialize all game units
  slides_init();
  heartbeat_init();
  sounds_init();

}

