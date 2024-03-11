var button = document.getElementById("change-text");
var p = document.getElementById("some-paragraph");

button.addEventListener("click", () => {
  p.innerHTML = "You clicked it!";
});
