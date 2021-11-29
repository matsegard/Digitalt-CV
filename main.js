window.addEventListener('load', main);


function main() {
    addEventListeners();
}

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


    aboutMeClick.addEventListener('click', scrollToAboutMeSection);
    aboutMeClick.addEventListener('click', hideNavbar);


    contactClick.addEventListener('click', scrollToContactSection);
    contactClick.addEventListener('click', hideNavbar);


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

function toggleIcon (){
    const iconChange = document.getElementById("menu-button");
    
     if(iconChange.innerHTML === 'menu'){
       iconChange.innerHTML = 'close';
     } else {
        iconChange.innerHTML = 'menu';
     }
}

    
