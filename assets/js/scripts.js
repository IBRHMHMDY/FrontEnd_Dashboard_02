      // Toggle Button Dark & Light Mode
const body = document.querySelector("body"),
      btnToggle = document.querySelector(".mode-toggle"),
      // Toggle Button Navbar Open & Close
      nav = body.querySelector("nav"),
      navToggle = document.querySelector(".nav-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
   body.classList.toggle("dark");
}
btnToggle.addEventListener("click", ()=>{
   body.classList.toggle("dark");
   if(body.classList.contains("dark")){
      localStorage.setItem("mode", "dark");
   }else{
      localStorage.setItem("mode", "light")
   }
})

navToggle.addEventListener("click", ()=>{
   nav.classList.toggle("close");
})