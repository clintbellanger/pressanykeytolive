/**
Basic input handling.
Use these lines in the init() function to enable:
  window.addEventListener('keydown', handleKeyDown, true);
  window.addEventListener('keyup', handleKeyUp, true);

2013 Clint Bellanger
*/

//---- Key States ---------------------------------------------------

var pressing = new Object();
pressing.anykey = false;

var input_lock = new Object();
input_lock.anykey = false;

//---- Input Functions ----------------------------------------------

function handleKeyDown(evt) {
  evt.preventDefault();
  pressing.anykey = true;
  
}

function handleKeyUp(evt) {

  pressing.anykey = false;
  input_lock.anykey = false;
}

function handleMouseDown(evt) {
  evt.preventDefault();
  pressing.anykey = true;
}

function handleMouseUp(evt) {
  pressing.anykey = false;
  input_lock.anykey = false;
}

/** Touch Handler **/

function handleTouchStart(evt) {
  evt.preventDefault();
  pressing.anykey = true;
}

function handleTouchEnd(evt) {
  pressing.anykey = false;
  input_lock.anykey = false;
}
