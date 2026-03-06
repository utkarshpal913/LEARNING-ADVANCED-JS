let input=document.querySelector("input");
let span=document.querySelector("span");
input.addEventListener("input",function(vals){
    span.textContent=vals.target.value.length;
});
