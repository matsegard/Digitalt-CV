window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', toggleMenu);

    const homeClick = document.getElementById('home-page');
    homeClick.addEventListener('click',  scrollToHomeSection);
    homeClick.addEventListener('click', hideNavbar);

    const aboutMeClick = document.getElementById('about-me-page');
    aboutMeClick.addEventListener('click', scrollToAboutMeSection);
    aboutMeClick.addEventListener('click', hideNavbar);
    
    const contactClick = document.getElementById('contact-page');
    contactClick.addEventListener('click', scrollToContactSection);
    contactClick.addEventListener('click', hideNavbar);

    const portfolioClick = document.getElementById('portfolio-page');
    portfolioClick.addEventListener('click', scrollToPortfolioSection);
    portfolioClick.addEventListener('click', hideNavbar);
   
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

function scrollToHomeSection() {
    const homeSection = document.getElementById('header');

   homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function scrollToAboutMeSection() {
    const aboutMeSection = document.getElementById('about-me');

    aboutMeSection.scrollIntoView({
        
        behavior: "smooth",
        block: "start",
    });
}

function scrollToContactSection() {
    const contactSection = document.getElementById('contact-me');
    
    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function scrollToPortfolioSection() {
    const portfolioSection = document.getElementById('portfolio');

    portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}