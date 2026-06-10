let progress = document.querySelector(".progress");
let span = document.querySelector("span");
let h2= document.querySelector("h2");
let para=document.querySelector(".para")

let count = 0;

let bar = setInterval(function () {

    if (count <= 100) {
        progress.style.width = count + "%";
        span.textContent = count + "%";
        count++;
    } 
    else {
        clearInterval(bar);
        h2.textContent="File Downlaoded";
        para.textContent=" ";
        
    }

}, 100);