// selection du menu déroulant 
let nav = document.querySelector(`#navburger`)

// ouvrir le menu
let open = document.querySelector(`#burger-icon`)
open.addEventListener('click', () => {
    nav.style.width = "100%"
})


// fermer le menu
let close = document.querySelector(`.close`)
close.addEventListener('click', () => {
    nav.style.width = "0%"
})
