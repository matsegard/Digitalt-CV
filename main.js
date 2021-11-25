window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', toggleMenu);

    const contactButton = document.getElementById("about-me-page");
    contactButton.addEventListener('click', showAboutMePage)
}

function toggleMenu() {
   const dropDown = document.getElementById('drop-menu');
   
   if (dropDown.style.display === 'none') {
    dropDown.style.display = 'block';
} else {
    dropDown.style.display = 'none';
}
}

function showAboutMePage(){
   const elmnt = document.getElementById('about-me');
   
   elmnt.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }


