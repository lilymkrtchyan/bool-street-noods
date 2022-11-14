// Dropdown Hamburger Menu:

// hides/shows content after resizing window
$(window).resize(function() {
  if ($(window).width() >= 600) {
      $("#dropdown-button").addClass("hidden");
      $("#dropdown-pages").removeClass("hidden");
  } else {
      $("#dropdown-button").removeClass("hidden");
      $("#dropdown-pages").addClass("hidden");
  }
});

// hides/shows content after selecting pages
if ($(window).width() >= 600) {
  $("#dropdown-button").addClass("hidden");
  $("#dropdown-pages").removeClass("hidden");
} else {
  $("#dropdown-button").removeClass("hidden");
  $("#dropdown-pages").addClass("hidden");
}

// hides/shows content after pressing the menu button
$("#dropdown-toggle").click(function() {
  if ($("#dropdown-button").hasClass("hidden")) {
      $("#dropdown-pages").removeClass("hidden");
  } else {
      $("#dropdown-pages").addClass("hidden");
  }
});
