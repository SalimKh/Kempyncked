import { auth, onAuthStateChanged, signOut } from './firebase-init.js';

function getRelativePath(href) {
    const currentPagePath = window.location.pathname;
    const currentPageDepth = (currentPagePath.match(/\//g) || []).length - 1; // Count how many slash in path
    const relativePrefix = '../'.repeat(currentPageDepth);
    return relativePrefix + href;
}

// Pages config
const pages = [
    { name: "K", href: "index.html" },
    { name: "Accueil", href: "home.html" },
    { name: "Space Ronan", href: "pages/spaceRonan.html", authRequired: true },
    { name: "Inscription", href: "signin.html", authTab: true, floatRight: true },
    { name: "Connexion", href: "login.html", authTab: true, floatRight: true },
    { name: "Gauche ou Droite ?", href: "pages/ronan.html", authRequired: true },
    { name: "Je m'ennuie au taf", href: "pages/revolution.html", authRequired: true },
];

const currentPath = window.location.pathname.split('/').pop(); // Get the current page

// Function to generate navbar
function generateNavbar(isAuthenticated) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = ''; // Clear existing navbar

    pages.forEach(page => {
        const li = document.createElement('li');
        li.className = (page.authRequired ? 'needAuth' : '') + (page.authTab ? ' authTab' : '');
        li.hidden = (page.authRequired && !isAuthenticated) || (page.authTab && isAuthenticated);
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
    console.log(currentPath);

    const currentPage = pages.find(page => page.href.includes(currentPath));
    const isAuthRequiredPage = currentPage && currentPage.authRequired;

    if (isAuthRequiredPage && !isAuthenticated) {
        window.location.href = "../home.html";
        return; // Redirected, no need to continue
    }

    if (isAuthenticated && currentPath === "home.html") {
        document.getElementsByClassName('join-us-text')[0].innerHTML = "Bienvenue";
    }
    generateNavbar(isAuthenticated);
});
