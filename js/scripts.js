$(document).ready(function() {
// UI logic
  $(".form-inline").submit(function(event) {
      firstName = $("input#name").val();
      $("#robot-lang").show();
      event.preventDefault();
  });

  $("form#robot-lang").submit(function() {
      event.preventDefault();
      const translation = $("#numberInput").val();
      const result = robotese(translation);
      $(".translation").text("Dearest " + firstName + ": " + result);
      $("#result").show();
  });
});