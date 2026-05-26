// const signe = document.querySelector('#signe')

// signe.addEventListener('click', ()=>{
//     console.log('clicked')
//     signe.classList.toggle('hidden')
// })   



// const burgerBtn = document.querySelector('#signe');
// const navMenu = document.querySelector('#menu');


// burgerBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('navMenu');
// });


// burgerBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('hidden');
//     burgerBtn.classList.toggle('open'); 
// });




// Sélectionner les éléments
const burger = document.getElementById("#burger");
const menu = document.getElementById("#menu");

// Ajouter un événement au clic
burger.addEventListener("click", () => {

  // Ajouter ou retirer la classe active
  menu.classList.toggle("active");
  burger.classList.toggle("open");

});