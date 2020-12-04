const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

document.getElementById('home').addEventListener("click",()=>{
  container.classList.toggle("active");
})
document.getElementById('service').addEventListener("click",()=>{
  container.classList.toggle("active");
})
document.getElementById('profil').addEventListener("click",()=>{
  container.classList.toggle("active");
})
document.getElementById('serv').addEventListener("click",()=>{
  container.classList.toggle("active");
})