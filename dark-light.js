const toggleMoon = document.getElementById("darkmode");
const toggleSun = document.getElementById("lightmode");
const nav = document.getElementById("top");
const toBgDark = document.querySelector("bg-light");
const toTextLight = document.querySelector("text-dark");
let x = document.getElementsByTagName("div");
let divBgLight = [];

for(let i=0;i<x.length;i++){
    if(x[i].classList.contains('bg-light')){
        divBgLight.push(x[i]);
    }
}

toggleMoon.onclick=()=>{
    toggleMoon.style.display = "none";
    toggleSun.classList.remove("d-none");
//span,a,button,
document.body.style.backgroundColor="#201";


divBgLight.forEach(item => {
item.classList.remove('bg-light');
item.classList.add("bg-dark");
item.classList.remove("text-dark");
item.classList.add("text-light");
});
   
}
toggleSun.onclick=()=>{
    toggleSun.classList.add("d-none");
    toggleMoon.style.display = "inline-block";
    document.body.style.backgroundColor="#eee";
       
    let y = document.getElementsByTagName("div");
    let divBgDark=[];   
    for(let j=0;j<y.length;j++){
        if(y[j].classList.contains('bg-dark')){
        divBgDark.push(y[j]);
       }
    }
  
divBgDark.forEach(item => {
    item.classList.remove("bg-dark");
    item.classList.add("bg-light");
    item.classList.remove("text-light");
    item.classList.add("text-dark");
    });

}