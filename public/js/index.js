let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".close");

let menu = document.querySelector(".menu");

console.log(menu);
close.addEventListener("click", () => {
  sidebar.style.display = "none";
});
menu.addEventListener("click", () => {
  sidebar.style.display = "block";
});
