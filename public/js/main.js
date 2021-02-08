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




// boucler  l'anim des produits
for (let i = 0; i < 9; i++) {
    let card = document.querySelectorAll('.view')[i]
    let image = document.querySelectorAll('.produit_calque')[i]
    image.addEventListener('mouseenter', () => {
        card.style.height = "100%"
        card.style.bottom ="60px"
    })
    image.addEventListener('mouseout', () => {
        card.style.height = "0%"
        card.style.bottom ="0px"
    })
}
