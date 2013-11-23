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

var mouse_pos = {x:0, y:0};

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
  mouse_pos = clickCoord(evt);
}

function handleMouseUp(evt) {
  pressing.anykey = false;
  input_lock.anykey = false;
}

/** Touch Handler **/

function handleTouchStart(evt) {
  evt.preventDefault();
  pressing.anykey = true;
  mouse_pos = touchCoord(evt);
}

function handleTouchEnd(evt) {
  pressing.anykey = false;
  input_lock.anykey = false;
}

/** Position calculators **/

function clickCoord(evt) {

  var canx;
  var cany;
  
  if (evt.pageX || evt.pageY) { 
    canx = evt.pageX;
    cany = evt.pageY;
  }
  else { 
    canx = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
    cany = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
  } 
  canx -= can.offsetLeft;
  cany -= can.offsetTop;
  
  canx /= SCALE;
  cany /= SCALE;
  
  return {x:canx, y:cany}  
}

function touchCoord(evt) {
  var canx = evt.touches[0].pageX;
  var cany = evt.touches[0].pageY;
  
  canx -= can.offsetLeft;
  cany -= can.offsetTop;
  
  canx /= SCALE;
  cany /= SCALE;
  
  return {x:canx, y:cany}  
}


