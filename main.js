window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', toggleMenu);

    const homeClick = document.getElementById('home-page');
    homeClick.addEventListener('click', showHomePage);
    homeClick.addEventListener('click', hideNavbar);

    const aboutMeClick = document.getElementById('about-me-page');
    aboutMeClick.addEventListener('click', showAboutMePage);
    aboutMeClick.addEventListener('click', hideNavbar);
    
    const contactClick = document.getElementById('contact-page');
    contactClick.addEventListener('click', showContactPage);
    contactClick.addEventListener('click', hideNavbar);
}

function toggleMenu() {
    const dropDown = document.getElementById('drop-menu');

    if (dropDown.style.display === 'none') {
        dropDown.style.display = 'block';
    } else {
        dropDown.style.display = 'none';
    }
}

function hideNavbar() {
    const dropmenu = document.getElementById('drop-menu');
    dropmenu.style.display = 'none'
}

function showHomePage() {
    const scrollToHome = document.getElementById('header');

    scrollToHome.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function showAboutMePage() {
    const scrollToAboutMe = document.getElementById('about-me');

    scrollToAboutMe.scrollIntoView({
        
        behavior: "smooth",
        block: "start",
    });
}

function showContactPage() {
    scrollToContactPage = document.getElementById('contact-me');

    scrollToContactPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}