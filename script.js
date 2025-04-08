const toggleButton = document.getElementById("toggleTheme");
const html = document.querySelector("html");
 
 toggleButton.addEventListener("click", () => {
   document.documentElement.classList.toggle("dark-theme");
   html.classList.toggle("dark-mode");
 });