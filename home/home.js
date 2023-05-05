$(document).ready(function () {
  let currentCookie = Cookies.get("sessionToken");
  console.log(currentCookie);
  if (currentCookie === undefined) {
    $("#currentSessionStatus").text("No active sessions!");
    $(".session-status").text(false);
  } else {
    $("#currentSessionStatus").text("One active cookie session!");
    $("#session-token").text(`Current session token: ${currentCookie}`);
    $(".session-status").text(true);
  }

  $("#about-page").click();
  $("#components-page").click();
  $("#add-cookie-button").click(function () {
    if (currentCookie !== undefined) return;
    let token = uuidv4();
    //chekc if already set
    Cookies.set("sessionToken", token, { expires: 1 / 144 });
    location.reload();
  });

  $("#delete-cookie-button").click(function () {
    if (currentCookie === undefined) return;
    //chekc if already set
    Cookies.remove("sessionToken");
    location.reload();
  });
});
