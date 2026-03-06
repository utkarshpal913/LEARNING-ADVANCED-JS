let form = document.querySelector("form");
let main = document.querySelector(".main");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function(vals) {
    vals.preventDefault();

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let profpic = document.createElement("div");
    profpic.classList.add("profpic");

    let img = document.createElement("img");
    img.setAttribute("src",input[0].value);

    let h2 = document.createElement("h2");
    h2.textContent = input[1].value;

    let h3 = document.createElement("h3");
    h3.textContent = input[2].value;

    let h4 = document.createElement("h4");
    h4.textContent = input[3].value;

    let p = document.createElement("p");
    p.textContent = input[4].value;

    profpic.appendChild(img);
    profile.appendChild(profpic);
    profile.appendChild(h2);
    profile.appendChild(h3);
    profile.appendChild(h4);
    profile.appendChild(p);

    main.append(profile);
});