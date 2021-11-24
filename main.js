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
   
   if (dropDown.style.display === 'none') {
    dropDown.style.display = 'block';
} else {
    dropDown.style.display = 'none';
}
}

