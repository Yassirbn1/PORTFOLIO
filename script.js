//menu 
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navber.classList.toggle('active');
};

// scroll entre les pages

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// 

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

//remove x icon when u click

 menuIcon.classList.remove('bx-x');
 navber.classList.remove('active'); 

};

//scroll reveal
ScrollReveal({

  //  reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//frontend developer
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer',' Backend Developer' , 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

//contact.js
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    console.log(email.value)
    const bodyMessage = `Full Name: ${fullName.value}<br>
     Email: ${email.value}<br>
     Phone Number: ${phone.value}<br>
     Message: ${mess.value}<br>`;

     Email.send({
        SecureToken: "6566144a-c447-4be1-8ebe-1ccf0b04506d",
        To: 'bennaniyassir2020@gmail.com',
        From: 'bennaniyassir2020@gmail.com',
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            console.log("Message envoyé : ", message);
            if (message === "OK") {
                Swal.fire({
                    title: "Succès !",
                    text: "Message envoyé avec succès !",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Erreur !",
                    text: "Une erreur s'est produite lors de l'envoi du message.",
                    icon: "error"
                });
            }
        }
    ).catch(
        error => {
            console.error("Erreur lors de l'envoi du message : ", error);
            Swal.fire({
                title: "Erreur !",
                text: "Une erreur s'est produite lors de l'envoi du message.",
                icon: "error"
            });
        }
    );
    
}

/// Sélectionnez le bouton par son ID
const sendButton = document.getElementById("sendButton");

// Ajoutez un gestionnaire d'événements pour l'événement "click"
sendButton.addEventListener("click", function(event) {
    // Empêchez le comportement par défaut du bouton (envoi du formulaire)
    event.preventDefault();

    // Appelez la fonction sendEmail
    sendEmail();
});




function checkInput(input) {
    if (input.value.trim() === "") {
        input.classList.add("error");
        input.parentElement.classList.add("error");
    } else {
        input.classList.remove("error");
        input.parentElement.classList.remove("error");
    }
}

function checkAllInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        checkInput(item);
    }

    const hasErrors = [...document.querySelectorAll(".item")].some(item => item.classList.contains("error"));

    return !hasErrors;
}

function checkEmail() {
    const email = document.getElementById("email");
    const emailValue = email.value.trim();

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    const errortxtemail = document.querySelector(".error-txt.email");


    if (!emailReg.test(emailValue)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errortxtemail.innerText = "enter a valid email adress";

        }
        else{
            errortxtemail.innerText = "email adress can't be blank";
        }
        return false;  
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
        return true;  
    }
}

form.addEventListener("change", (e) => {
    checkAllInputs();
    checkEmail();
});
form.addEventListener("input", (e) => {
    checkInput(e.target);
    if (e.target.id === "email") {
        checkEmail();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkAllInputs();

    const isValid = checkAllInputs() && checkEmail();
console.log("wachh valid "+isValid)
    if (isValid) {
        sendEmail();
    }
    document.addEventListener("DOMContentLoaded", function () {
        // Sélectionnez le lien "Read More" et la section où le contenu sera affiché
        const readMoreLink = document.getElementById("read-more-link");
        const readMoreContent = document.getElementById("read-more-content");
    
        // Ajoutez un gestionnaire d'événements au clic sur le lien "Read More"
        readMoreLink.addEventListener("click", function (event) {
            // Empêchez le comportement par défaut du lien
            event.preventDefault();
    
            // Utilisez AJAX pour charger le contenu de "read.html"
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "read more/read.html", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Mettez à jour le contenu de la section avec le contenu de "read.html"
                    readMoreContent.innerHTML = xhr.responseText;
    
                    // Ajoutez le lien vers le fichier read.css
                    const styleLink = document.createElement("link");
                    styleLink.rel = "stylesheet";
                    styleLink.href = "read more/read.css";
                    document.head.appendChild(styleLink);
    
                    // Vous pouvez également ajouter ici le code pour activer vos animations ou styles
                    // en fonction du contenu chargé, par exemple, activer les icônes Boxicons.
                }
            };
            xhr.send();
        });
    });
    
});
//checkInputsOnInput();

//dark-lightmode

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
};



document.addEventListener('DOMContentLoaded', function () {
    const iconModeClair = document.getElementById('icon');
    const body = document.body;

    // Vérifiez si le mode sombre est activé dans le stockage local
    const modeSombreActive = localStorage.getItem('modeSombre') === 'activé';

    // Appliquez le mode sombre s'il est activé
    if (modeSombreActive) {
        body.classList.add('dark-theme');
        iconModeClair.src = 'images/sun.png'; // Assurez-vous que l'icône reflète le bon état
    }

    // Ajoutez un gestionnaire d'événements pour le basculement du mode sombre/clair
    iconModeClair.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        const estModeSombre = body.classList.contains('dark-theme');

        // Enregistrez la préférence de l'utilisateur dans le stockage local
        localStorage.setItem('modeSombre', estModeSombre ? 'activé' : 'désactivé');

        // Changez l'icône en fonction du mode
        iconModeClair.src = estModeSombre ? 'images/sun.png' : 'images/moon.png';
    });

    // ... (le reste de votre script)

    // Restez à l'écoute des changements de stockage local pour le mode sombre
    window.addEventListener('storage', function (event) {
        if (event.key === 'modeSombre') {
            const modeSombreActive = event.newValue === 'activé';
            body.classList.toggle('dark-theme', modeSombreActive);
            iconModeClair.src = modeSombreActive ? 'images/sun.png' : 'images/moon.png';
        }
    });
});