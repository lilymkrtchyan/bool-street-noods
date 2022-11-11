// Dropdown Hamburger Menu:

// hides/shows content after resizing window
$(window).resize(function() {
  if ($(window).width() >= 600) {
      $("#dropdown-toggle").addClass("hidden");
      $("#dropdown-options").removeClass("hidden");
  } else {
      $("#dropdown-toggle").removeClass("hidden");
      $("#dropdown-options").addClass("hidden");
  }
});

// hides/shows content after selecting pages
if ($(window).width() >= 600) {
  $("#dropdown-toggle").addClass("hidden");
  $("#dropdown-options").removeClass("hidden");
} else {
  $("#dropdown-toggle").removeClass("hidden");
  $("#dropdown-options").addClass("hidden");
}

// hides/shows content after pressing the menu button
$("#dropdown-toggle").click(function() {
  if ($("#dropdown-options").hasClass("hidden")) {
      $("#dropdown-options").removeClass("hidden");
  } else {
      $("#dropdown-options").addClass("hidden");
  }
});
