let btn=document.querySelector(".btn");
let input=document.querySelector(".input");
btn.addEventListener("click",function(){
    input.click();

});
input.addEventListener("change",function(val){
    const file=val.target.files[0];
    if(file){
        btn.textContent = file.name.slice(0,10) + "...";
    }
    else{
        btn.textContent="UPLOAD FILE";
    }
})