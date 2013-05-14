/**
 * Slide managing and drawing
 */

var SLIDE_COUNT = 24;
 
var slides = new Object();

slides.img = new Array();
slides.load_counter = 0;
slides.current = -1;
slides.redraw = false;

function slides_init() {

  for (var i=0; i<SLIDE_COUNT; i++) {
    slides.img[i] = new Image();
	slides.img[i].onload = function() {slides_onload();};
  }
  
  slides.img[0].src = "images/slides/img00.jpg";
  slides.img[1].src = "images/slides/img01.jpg";
  slides.img[2].src = "images/slides/img02.jpg";
  slides.img[3].src = "images/slides/img03.jpg";
  slides.img[4].src = "images/slides/img04.jpg";
  slides.img[5].src = "images/slides/img05.jpg";
  slides.img[6].src = "images/slides/img06.jpg";
  slides.img[7].src = "images/slides/img07.jpg";
  slides.img[8].src = "images/slides/img08.jpg";
  slides.img[9].src = "images/slides/img09.jpg";
  slides.img[10].src = "images/slides/img10.jpg";
  slides.img[11].src = "images/slides/img11.jpg";
  slides.img[12].src = "images/slides/img12.jpg";
  slides.img[13].src = "images/slides/img13.jpg";
  slides.img[14].src = "images/slides/img14.jpg";
  slides.img[15].src = "images/slides/img15.jpg";
  slides.img[16].src = "images/slides/img16.jpg";
  slides.img[17].src = "images/slides/img17.jpg";
  slides.img[18].src = "images/slides/img18.jpg";
  slides.img[19].src = "images/slides/img19.jpg";
  slides.img[20].src = "images/slides/img20.jpg";
  slides.img[21].src = "images/slides/img21.jpg";
  slides.img[22].src = "images/slides/img22.jpg";
  slides.img[23].src = "images/slides/img23.jpg";

}

function slides_onload() {
  slides.load_counter++;
}

function slides_logic() {

  // update the slide when the cursor is precisely over
  // the heart location
  if (heartbeat.cursor_x == 120) {
    slides.current++;
	slides.redraw = true;
  }
}

function slides_render() {

  if (!slides.redraw) return;
  if (slides.current < 0) return;
  
  slides.redraw = false;
  
  ctx.drawImage(
    slides.img[slides.current],
    0,
    0,
    320 * PRESCALE,
    200 * PRESCALE,	
    0,
	0,
    320 * SCALE,
    200 * SCALE
  );
}
