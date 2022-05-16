window.addEventListener("load", function(){
    let menu = document.querySelector(".menu");
    let openMenu = document.querySelector(".open-menu");
    let closeMenu = document.querySelector(".close-menu");

    openMenu.addEventListener("click", function toggleMenu(){
        menu.classList.toggle("menu_opened")
    })
    closeMenu.addEventListener("click", function toggleMenu(){
        menu.classList.toggle("menu_opened")
    })

})