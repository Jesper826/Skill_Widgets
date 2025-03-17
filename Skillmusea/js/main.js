const button = document.getElementById("js--menu");
const navagation = document.getElementById("js--nav");
const body = document.getElementById("js--body");

button.onclick = function () {
  navagation.style.visibility = "visible";
  navagation.style.opacity = 1;
  body.style.overflow = 'hidden';
  
};
