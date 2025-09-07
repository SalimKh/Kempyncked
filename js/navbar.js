import { auth, onAuthStateChanged, signOut } from './firebase-init.js';

function getRelativePath(href) {
    return window.location.pathname.replace(currentPath, href);
}

// Pages config
const pages = [
    { name: "K", href: "index.html" },
    { name: "Accueil", href: "home.html" },
    { name: "Space Ronan", href: "pages/spaceRonan.html" },
    { name: "Inscription", href: "signin.html", authTab: true, floatRight: true },
    { name: "Connexion", href: "login.html", authTab: true, floatRight: true },
    { name: "Gauche ou Droite ?", href: "pages/ronan.html"},
    { name: "Quel est ce Pokémon ?", href: "pages/revolution.html" },
];

const currentPath = (() => {
    let path  = window.location.pathname.split('/').pop();
    if (window.location.pathname.includes('pages/')) {
        path = 'pages/' + path;
    }
    return path;
})();

// Function to generate navbar
function generateNavbar(isAuthenticated) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = ''; // Clear existing navbar

    pages.forEach(page => {
        const li = document.createElement('li');
        li.className = (page.authTab ? ' authTab' : '');
        li.hidden = (page.authTab && isAuthenticated);
        if (page.floatRight) li.style.float = 'right';

        const a = document.createElement('a');
        a.href = getRelativePath(page.href);
        a.textContent = page.name;

        if (currentPath === page.href.split('/').pop()) {
            a.className = 'active'; // Set active class if the current page matches
        }

        li.appendChild(a);
        navbar.appendChild(li);
    });

    const logOutElement = document.createElement('li');
    logOutElement.id = 'logOut';
    logOutElement.className = 'needAuth';
    logOutElement.hidden = !isAuthenticated;
    logOutElement.style.float = 'right';

    const span = document.createElement('span');
    span.textContent = 'Déconnexion';
    logOutElement.appendChild(span);
    navbar.appendChild(logOutElement);

    logOutElement.addEventListener('click', () => {
        signOut(auth)
            .then(() => {
                location.reload();
            })
            .catch((error) => {
                console.error("Erreur de déconnexion", error);
            });
    });
}

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
    const isAuthenticated = !!user;

    if (isAuthenticated && currentPath === "home.html") {
        document.getElementsByClassName('join-us-text')[0].innerHTML = "Bienvenue";
    }
    generateNavbar(isAuthenticated);
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const links = [
        { name: "Accueil", href: "home.html" },
        { name: "À propos", href: "about.html" },
        { name: "Projets", href: "projects.html" },
        { name: "Contact", href: "contact.html" }
    ];

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.href;
        li.appendChild(a);
        navbar.appendChild(li);
    });
});
