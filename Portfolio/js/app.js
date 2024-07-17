const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")){
            document.querySelector(".menu-mobile .material-icons").innerHTML = "close"
    }
    else {
        document.querySelector(".menu-mobile .material-icons").innerHTML = "menu"
    }
}