let icon = document.getElementById("icon");
const inputs = document.querySelectorAll(".input");
let btn = document.querySelector(".btn");

// darkmode function
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  inputs.forEach(function (i) {
    i.classList.toggle("dark-mode");
  });
  btn.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
    text.classList.remove("dark-mode");
  }
};
