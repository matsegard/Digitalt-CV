window.addEventListener('load', main);


function main() {
    addEventListeners();
}

/** Adding eventlisteners on all the buttons in header **/
function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    const homeClick = document.getElementById('home-page');
    const aboutMeClick = document.getElementById('about-me-page');
    const contactClick = document.getElementById('contact-page');
    const portfolioClick = document.getElementById('portfolio-page');

    menuButton.addEventListener('click', toggleIcon);
    menuButton.addEventListener('click', toggleMenu);

    homeClick.addEventListener('click', scrollToHomeSection);
    homeClick.addEventListener('click', hideNavbar);
    homeClick.addEventListener('click', toggleIcon);


    aboutMeClick.addEventListener('click', scrollToAboutMeSection);
    aboutMeClick.addEventListener('click', hideNavbar);
    aboutMeClick.addEventListener('click', toggleIcon);


    contactClick.addEventListener('click', scrollToContactSection);
    contactClick.addEventListener('click', hideNavbar); 
    contactClick.addEventListener('click', toggleIcon);


    portfolioClick.addEventListener('click', scrollToPortfolioSection);
    portfolioClick.addEventListener('click', hideNavbar);
    portfolioClick.addEventListener('click', toggleIcon);

}

/** Shows dropdown navbar when clicking on hamburger icon and hides it when clicking on the x icon  */
function toggleMenu() {
    const dropDown = document.getElementById('drop-menu');

    if (dropDown.style.display === 'none') {
        dropDown.style.display = 'block';
    } else {
        dropDown.style.display = 'none';
    }
}

/** Changes hamburger icon to x icon when clicking on it */
function toggleIcon() {
    const iconChange = document.getElementById("menu-button");

    if (iconChange.innerHTML === 'menu') {
        iconChange.innerHTML = 'close';
    } else {
        iconChange.innerHTML = 'menu';
    }
}

/** Hides the dropdown navbar when clicking on something in the navbar */
function hideNavbar() {
    const dropmenu = document.getElementById('drop-menu');
    dropmenu.style.display = 'none';
}

/** Scrolls to the home section of the page when clicking on Home */
function scrollToHomeSection() {
    const homeSection = document.getElementById('header');

    homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

/** Scrolls to the about me section of the page when clicking on About */
function scrollToAboutMeSection() {
    const aboutMeSection = document.getElementById('about-me');

    aboutMeSection.scrollIntoView({

        behavior: "smooth",
        block: "center",
    });
}

/** Scrolls to the contact me section of the page when clicking on Contact */
function scrollToContactSection() {
    const contactSection = document.getElementById('contact-me');

    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
}

/** Scrolls to the portfolio section of the page when clicking on Portfolio */
function scrollToPortfolioSection() {
    const portfolioSection = document.getElementById('portfolio');

    portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}
