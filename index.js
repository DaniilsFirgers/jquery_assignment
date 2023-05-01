$(document).ready(function () {
  $("#roll-button").click(function () {
    var result = Math.floor(Math.random() * 6) + 1; // generate random number between 1 and 6
    $("#roll-result").text(result); // update DOM with result
  });
});
