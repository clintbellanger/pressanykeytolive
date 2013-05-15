/**
 Primary game state switcher
 
 */
 
var STATE_TITLE = 0;
var STATE_PLAY = 1;
var STATE_GAMEOVER = 2;

var gamestate = STATE_TITLE;

var display_title = false;
var display_ending = false;

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
	  gamestate_show_title();
	  heartbeat_render();
	  break;
	  
    case STATE_PLAY:
	  heartbeat_render();
	  slides_render();
	  break;

    case STATE_GAMEOVER:
	  gamestate_show_ending();	
	  break;
  }
}

function gamestate_show_title() {
  if (!display_title && slides.load_counter == SLIDE_COUNT) {
    slides_render_img(SLIDE_TITLE);	
    display_title = true;
  }
}

function gamestate_show_ending() {
  if (!display_ending) {
    display_ending = true;
    
	if (slides.current == SLIDE_FINAL) {
	  slides_render_img(SLIDE_ENDING);
	}	
	else if (slides.current < SLIDE_ADULT) {
	  slides_render_img(SLIDE_OBIT1);
	}
	else {
	  slides_render_img(SLIDE_OBIT2);
	}
  }
}
