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

// 메뉴 영역에서 마우스를 벗어나면 메뉴 닫기
document.getElementById("menu").addEventListener("mouseleave", closeMenu);
