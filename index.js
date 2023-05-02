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

  // style section
  let backgroundColors = ["green", "red", "yellow", "orange"];
  let i = 0;

  let intervalId = setInterval(function () {
    console.log(backgroundColors[i]);
    $(".style-section").css("background-color", backgroundColors[i]);
    i = (i + 1) % backgroundColors.length;
  }, 1000);
  $("#get-todo").click(function () {
    const randomTodo = Math.floor(Math.random() * 100) + 1;
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/todos/${randomTodo}`,
      method: "GET",
      dataType: "json",
      success: function (response) {
        // Do something with the response data
        console.log(response.completed);
        $(".user-id").text(`User ID: ${response.userId}`);
        $(".title").text(`Title: ${response.title}`);
        $(".completed").text(
          `Completed: ${JSON.stringify(response.completed)}`
        );
      },
      error: function (xhr, status, error) {
        // Handle the error
        console.log("Error:", error);
      },
    });
  });
});
