const body = document.body;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
function applyTheme() {

  if(systemTheme.matches){
    body.classList.add("dark");
    body.classList.remove("light");
  } 
  else{
    body.classList.add("light");
    body.classList.remove("dark");
  }

}
applyTheme();
body.classList.add(localStorage.getItem("theme"));



let btn=document.querySelector("button");
btn.addEventListener("click",function(){
   if(body.classList.contains("dark")) {
          body.classList.remove("dark");
          body.classList.add("light");
          localStorage.setItem("theme","light");
    }
   else{
          body.classList.remove("light");
          body.classList.add("dark");
          localStorage.setItem("theme","dark");
  }
});


systemTheme.addEventListener("change", function(){
  applyTheme();
});