/**
 Primary game state switcher
 
 */
 
var STATE_TITLE = 0;
var STATE_PLAY = 1;
var STATE_GAMEOVER = 2;

var gamestate = STATE_TITLE;

function gamestate_logic() {

  switch(gamestate) {
    case STATE_TITLE:
	  heartbeat_logic();
	  break;
    case STATE_PLAY:
	  heartbeat_logic();
	  slides_logic();
	  break;
	case STATE_GAMEOVER:
	  break;
  } 
}

function gamestate_render() {

  switch(gamestate) {
    case STATE_TITLE:
	  heartbeat_render();
	  break;
    case STATE_PLAY:
	  heartbeat_render();
	  slides_render();
	  break;
	case STATE_GAMEOVER:
	  break;
  }
}

