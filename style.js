const burger = document.getElementById("signe");
const menu = document.getElementById("classe");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Changement de l'icône
    if(menu.classList.contains("active")){
        burger.classList.remove("fa-bars");
        burger.classList.add("fa-xmark");
    }else{
        burger.classList.remove("fa-xmark");
        burger.classList.add("fa-bars");
    }
});