// business logic

const robotese = function(translation){

  let robotArray = [];

  for (let index = 0; index <= translation; index += 1) {

      const str = index.toString();

      if (str.includes("3") === true) {
          robotArray.push(" Won't you be my neighbor? ");
      } else if (str.includes("2") === true) {
          robotArray.push(" Boop!");
      } else if (str.includes("1") === true) {
          robotArray.push(" Beep!");
      } else {
          robotArray.push(" " + str);
      }
    }

  return robotArray;
  }

// UI logic

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
      event.preventDefault();
      firstName = $("input#name").val();
      $("#robot-lang").show();
  });

  $("form#robot-lang").submit(function(event) {
      event.preventDefault();
      const translation = $("#numberInput").val();
      const result = robotese(translation);
      $(".translation").text("Dearest " + firstName + ": " + result);
      $("#result").slideDown("slow");
      $("#reversal").show();
      console.log(typeof result)
  });

  $("#reverse-button").click(function() {
    const reversedTranslation = robotArray.reverse();
    $(".translation-reversed").text("Is this better, " + firstName + "?: " + reversedTranslation + "...blastOff.exe");
  });
});
