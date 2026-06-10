let form = document.querySelector("form");
let error = document.querySelectorAll(".error");
let h4 = document.querySelector("h4");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    const emailregex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let a = emailregex.test(email.value);
    let b = passwordregex.test(password.value);

    let check = true;

    if(!a){
        error[0].style.display = "initial";
        check = false;
    } else {
        error[0].style.display = "none";
    }

    if(!b){
        error[1].style.display = "initial";
        check = false;
    } else {
        error[1].style.display = "none";
    }

    if(check){
        h4.style.display = "block";
    }
    
});