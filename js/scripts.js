$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("darkBackground");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("lightBackground");
  });

});
