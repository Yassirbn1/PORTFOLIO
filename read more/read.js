document.addEventListener("DOMContentLoaded", function () {
    const htmlIcon = document.getElementById("htmlIcon");
    const cssIcon = document.getElementById("cssIcon");
    const jsIcon = document.getElementById("jsIcon");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (htmlIcon && cssIcon && jsIcon && prevBtn && nextBtn) {
        const allIcons = [
            '<i class="bx bxl-html5"></i>',
            '<i class="bx bxl-css3"></i>',
            '<i class="bx bxl-javascript"></i>'
        ];

        let index = 0;

        function updateIcon() {
            // Mettez à jour l'icône avec le code HTML actuel et ajoutez la balise <p>
            htmlIcon.innerHTML = (index === 0) ? allIcons[index] + '<p>HTML</p>' : '';
            cssIcon.innerHTML = (index === 1) ? allIcons[index] + '<p>CSS</p>' : '';
            jsIcon.innerHTML = (index === 2) ? allIcons[index] + '<p>JS</p>' : '';
        }

        function showPrevIcon() {
            // Décrémentez l'index pour afficher l'icône précédente
            index = (index - 1 + allIcons.length) % allIcons.length;
            updateIcon();
        }

        function showNextIcon() {
            // Incrémentez l'index pour afficher l'icône suivante
            index = (index + 1) % allIcons.length;
            updateIcon();
        }

        // Gestionnaires d'événements pour les boutons
        prevBtn.addEventListener("click", showPrevIcon);
        nextBtn.addEventListener("click", showNextIcon);

        // Appel initial de la fonction updateIcon
        updateIcon();

        // Utilisez setInterval pour appeler la fonction updateIcon toutes les 2 secondes
        setInterval(showNextIcon, 1500);
    } else {
        console.error("One or more elements not found.");
    }
});
//dark-lightmode




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

    // Restez à l'écoute des changements de stockage local pour le mode sombre
    window.addEventListener('storage', function (event) {
        if (event.key === 'modeSombre') {
            const modeSombreActive = event.newValue === 'activé';
            body.classList.toggle('dark-theme', modeSombreActive);
            iconModeClair.src = modeSombreActive ? 'images/sun.png' : 'images/moon.png';
        }
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
