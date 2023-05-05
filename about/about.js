$(document).ready(function () {
  let currentCookie = Cookies.get("sessionToken");
  if (currentCookie === undefined) {
    $("#currentSessionStatus").text("No active sessions!");
    $(".session-status").text(false);
  } else {
    $("#session-token").text(`Current session token: ${currentCookie}`);
    $(".session-status").text(true);
  }
  $("#home-page").click();
  $("#components-page").click();
});
