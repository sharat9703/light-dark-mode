const toggleMoon = document.getElementById("darkmode");
const toggleSun = document.getElementById("lightmode");
const nav = document.getElementById("top");
const toBgDark = document.querySelector("bg-light");
const toTextLight = document.querySelector("text-dark");
toggleMoon.onclick=()=>{
    toggleMoon.style.display = "none";
    toggleSun.classList.remove("d-none");
//span,a,button,
document.body.style.backgroundColor="#201";

toBgDark.style.remove("background-color");
   
}
toggleSun.onclick=()=>{
    toggleSun.classList.add("d-none");
    toggleMoon.style.display = "inline-block";
    document.body.style.backgroundColor="#eee";
    toBgDark.forEach((item)=>{
        item.style.backgroundColor = "#fff";
       })
}