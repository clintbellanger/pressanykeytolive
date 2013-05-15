/**
 * Slide managing and drawing
 */

var SLIDE_COUNT = 50;

var SLIDE_ADULT = 18;
var SLIDE_FINAL = 45;
var SLIDE_TITLE = 46;
var SLIDE_OBIT1 = 47;
var SLIDE_OBIT2 = 48;
var SLIDE_ENDING = 49;
 
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
  slides.img[24].src = "images/slides/img24.jpg";
  slides.img[25].src = "images/slides/img25.jpg";
  slides.img[26].src = "images/slides/img26.jpg";
  slides.img[27].src = "images/slides/img27.jpg";
  slides.img[28].src = "images/slides/img28.jpg";
  slides.img[29].src = "images/slides/img29.jpg";
  slides.img[30].src = "images/slides/img30.jpg";
  slides.img[31].src = "images/slides/img31.jpg";
  slides.img[32].src = "images/slides/img32.jpg";
  slides.img[33].src = "images/slides/img33.jpg";
  slides.img[34].src = "images/slides/img34.jpg";
  slides.img[35].src = "images/slides/img35.jpg";
  slides.img[36].src = "images/slides/img36.jpg";
  slides.img[37].src = "images/slides/img37.jpg";
  slides.img[38].src = "images/slides/img38.jpg";
  slides.img[39].src = "images/slides/img39.jpg";
  slides.img[40].src = "images/slides/img40.jpg";
  slides.img[41].src = "images/slides/img41.jpg";
  slides.img[42].src = "images/slides/img42.jpg";
  slides.img[43].src = "images/slides/img43.jpg";
  slides.img[44].src = "images/slides/img44.jpg";
  slides.img[45].src = "images/slides/img45.jpg";
  slides.img[46].src = "images/slides/title.jpg";
  slides.img[47].src = "images/slides/obit_child.jpg";
  slides.img[48].src = "images/slides/obit_adult.jpg";
  slides.img[49].src = "images/slides/ending.jpg";
}

function slides_onload() {
  slides.load_counter++;
}

function slides_logic() {

  // update the slide when the cursor is precisely over
  // the heart location
  if (heartbeat.cursor_x == 120) {
  
    if (slides.current < SLIDE_FINAL) {
      slides.current++;
	  slides.redraw = true;
	}
  }
}

function slides_render() {

  if (!slides.redraw) return;
  if (slides.current < 0) return;
  
  slides.redraw = false;
  
  slides_render_img(slides.current);
  
}

function slides_render_img(img_id) {
  ctx.drawImage(
    slides.img[img_id],
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
