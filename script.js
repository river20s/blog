let menuOpen = false;

function toggleMenu() {
    const menu = document.getElementById("menu");
    menuOpen = !menuOpen;
    menu.style.display = menuOpen ? "flex" : "none";
}

function closeMenu() {
    if (menuOpen) {
        const menu = document.getElementById("menu");
        menu.style.display = "none";
        menuOpen = false;
    }
}


