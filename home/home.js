$(document).ready(function () {
  $("#about-page").click();
  $("#components-page").click();
  $("#add-cookie-button").click(function () {
    let token = uuidv4();
    Cookies.set("sessionToken", token, { expires: 1 / 144 });
  });
});
