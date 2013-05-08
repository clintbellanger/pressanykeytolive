/**
 Primary game state switcher
 
 */
 
var STATE_PLAY = 0;
var STATE_GAMEOVER = 1;
 
var gamestate = STATE_PLAY;

function gamestate_logic() {

  switch(gamestate) {
    case STATE_PLAY:
	  heartbeat_logic();
	  break;
	case STATE_GAMEOVER:
	  break;
  } 
}

function gamestate_render() {

  switch(gamestate) {
    case STATE_PLAY:
	  heartbeat_render();
	  break;
	case STATE_GAMEOVER:
	  break;
  }
}

