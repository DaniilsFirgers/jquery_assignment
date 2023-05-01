$(document).ready(function () {
  $("#roll-button").click(function () {
    // get local storage
    $("#clear-local-storage").hide();
    let sixCount = localStorage.getItem("six");

    var diceResult = Math.floor(Math.random() * 6) + 1; // generate random number between 1 and 6
    $("#roll-result").text(diceResult); // update DOM with result
    if (diceResult === 6) {
      if (sixCount === null) {
        $("#dice-message").text("You just hit 6!");
        sixCount++;
        localStorage.setItem("six", sixCount);
      } else {
        sixCount++;
        localStorage.setItem("six", sixCount);
        $("#dice-message").text(`You already hit number 6 - ${sixCount} times`);
        $("#clear-local-storage").show();
      }
    } else {
      $("#dice-message").text("");
    }
  });
  $(".disconfirm-clear").click(function () {
    $("#clear-local-storage").hide();
  });
  $(".confirm-clear").click(function () {
    localStorage.removeItem("six");
  });
});
