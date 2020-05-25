function toggleClass() {
  let menu = document.querySelector(".navbardesktop");
  menu.classList.toggle("toggleCls");
}

$(".toportfolio").on("click", function (event) {
  var elmnt = document.getElementById("portfolio");
  elmnt.scrollIntoView({ behavior: "smooth" });
});

$(".toportfoliomenu").on("click", function (event) {
  var elmnt = document.getElementById("portfolio");
  elmnt.scrollIntoView({ behavior: "smooth" });
  toggleClass();
});

$(".toaboutme").on("click", function (event) {
  var elmnt = document.getElementById("aboutme");
  elmnt.scrollIntoView({ behavior: "smooth" });
  toggleClass();
});

$(".tocontact").on("click", function (event) {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView({ behavior: "smooth" });
  toggleClass();
});

$(".logo").on("click", function (event) {
  var elmnt = document.getElementById("cloud");
  elmnt.scrollIntoView({ behavior: "smooth" });
});
