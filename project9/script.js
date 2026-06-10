let form=document.querySelector("form");
let nameInput = document.querySelector('.form-group:nth-of-type(1) input');
let roleInput = document.querySelector('.form-group:nth-of-type(2) input');
let bioInput = document.querySelector('.form-group:nth-of-type(3) textarea');
let photoInput = document.querySelector('.form-group:nth-of-type(4) input');
let userManager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitform.bind(this));
    },

    submitform: function (e) {
        e.preventDefault();
        this.addUser();
        form.reset();
        this.showUser();
        // console.log(this);
    },

    addUser: function () {
        this.users.push({
            nameInput: nameInput.value,
            roleInput: roleInput.value,
            bioInput: bioInput.value,
            photoInput: photoInput.value
        });
    },

    showUser: function () {
        


        let cardSection = document.querySelector(".card-section");
        cardSection.innerHTML="";

        // create card
        let userCard = document.createElement("div");
        userCard.classList.add("user-card");
        this.users.forEach(function(user){
            // profile image container
        let profileImg = document.createElement("div");
        profileImg.classList.add("profile-img");

        // image
        let img = document.createElement("img");
        img.src = user.photoInput;

        // user name
        let userName = document.createElement("h3");
        userName.classList.add("user-name");
        userName.textContent =user.nameInput ;

        // user role
        let userRole = document.createElement("p");
        userRole.classList.add("user-role");
        userRole.textContent = user.roleInput;

        // user bio
        let userBio = document.createElement("p");
        userBio.classList.add("user-bio");
        userBio.textContent =user.bioInput;

        // structure building
        profileImg.appendChild(img);

        userCard.appendChild(profileImg);
        userCard.appendChild(userName);
        userCard.appendChild(userRole);
        userCard.appendChild(userBio);

        cardSection.appendChild(userCard);
        });
   
},


    removeUser: function () {
              
    } 
};
userManager.init();