const SLIDES = $("slides");

function showSlide(num) {
    let index = num - 1;
    let currentSlide = SLIDES.eq(index);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
}

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
    let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
      prevNum = SLIDES.length;
    }
    showSlide(prevNum);
}

$("#next-button").click(function() {
  nextSlide();
});

$("#back-button").click(function() {
    prevSlide();
});
