/**
 Sound effects
 */
 
var SFX_BEAT = 0;
var SFX_MISS = 1;
var SFX_MONITOR = 2;
var SFX_FLATLINE = 3;

var sounds = new Object();
sounds.fx = new Array();

function sounds_init() {
  sounds.fx[SFX_BEAT] = new Audio("sounds/heartbeat.wav");
  sounds.fx[SFX_MISS] = new Audio("sounds/miss.wav");
  //sounds.fx[SFX_MONITOR] = new Audio("sounds/monitor.wav");
  //sounds.fx[SFX_FLATLINE] = new Audio("sounds/flatline.wav");
 
}

function sounds_play(sfx_id) {
 
  try {
    sounds.fx[sfx_id].currentTime = 0;
	sounds.fx[sfx_id].play();
  }
  catch(err) {
    // it's okay if sounds can't play.
	// TODO: change to "don't play if sound is not loaded yet" like images
  };
 
}
