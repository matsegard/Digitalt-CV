window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', toggleMenu);
}

function toggleMenu() {
   const dropDown = document.getElementById('drop-menu');
   
   if (dropDown.style.visibility === "hidden") {
    dropDown.style.visibility = 'visible';
} else {
    dropDown.style.visibility = 'hidden';
}
}

