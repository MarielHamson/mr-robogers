// business logic

const robotese = function(numberInput){

  let robotArray = [];

  for (let index = 0; index <= numberInput; index += 1) {

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

const backwardsRobotese = function(reverseNumberInput){
    let reversedRobotArray = [];
  
    for (let index = reverseNumberInput; index >= 0; index -= 1) {
  
        const str = index.toString();
  
        if (str.includes("3") === true) {
            reversedRobotArray.push(" Won't you be my neighbor? ");
        } else if (str.includes("2") === true) {
            reversedRobotArray.push(" Boop!");
        } else if (str.includes("1") === true) {
            reversedRobotArray.push(" Beep!");
        } else {
            reversedRobotArray.push(" " + str);
        }
      }
  
    return reversedRobotArray;
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
      const numberInput = $("#numberInput").val();
      const result = robotese(numberInput);
      $(".translation").text("Dearest " + firstName + ": " + result);
      $("#result").slideDown("slow");
      $("#reversal").show();
  });

  $("#robot-lang-reversed").submit(function(event) {
    event.preventDefault();
    const reverseNumberInput = $("#reverseNumberInput").val();
    const reversedResult = backwardsRobotese(reverseNumberInput);
    $(".translation-reversed").text("Is this better, " + firstName + "?: " + reversedResult + "...blastOff.exe");
    $(".translation-reversed").fadeIn();
  });
});
