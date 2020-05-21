function toggleClass() {
  let menu = document.querySelector(".navbardesktop");
  menu.classList.toggle("toggleCls");
}

$(".toportfolio").on("click", function (event) {
  var elmnt = document.getElementById("portfolio");
  elmnt.scrollIntoView();
});

$(".toportfoliomenu").on("click", function (event) {
  var elmnt = document.getElementById("portfolio");
  elmnt.scrollIntoView();
  toggleClass();
});

$(".toaboutme").on("click", function (event) {
  var elmnt = document.getElementById("aboutme");
  elmnt.scrollIntoView();
  toggleClass();
});

$(".tocontact").on("click", function (event) {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView();
  toggleClass();
});

$(".logo").on("click", function (event) {
  var elmnt = document.getElementById("cloud");
  elmnt.scrollIntoView();
});
