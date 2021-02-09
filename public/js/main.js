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
        card.style.bottom = "60px"
    })
    image.addEventListener('mouseout', () => {
        card.style.height = "0%"
        card.style.bottom = "0px"
    })
}


const slides = document.querySelector(".slide")
const buttons = document.querySelector(".map");
buttons.addEventListener("click", e => {
    Array.from(buttons.children).forEach(item => {
        item.classList.remove("border")
    })
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttons.children).forEach(item => {
            item.classList.remove("active")
        })
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(0)"
            e.target.parentNode.classList.add("active")
            e.target.parentNode.classList.add("border")
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-12.2%)"
            e.target.classList.add("active")
            e.target.parentNode.classList.add("border")
        } else if (e.target.classList.contains('third')) {
            slides.style.transform = 'translateX(-24.4%)'
            e.target.classList.add('active')
            e.target.parentNode.classList.add("border")
        } else if (e.target.classList.contains('four')) {
            slides.style.transform = 'translateX(-36.6%)'
            e.target.classList.add('active')
            e.target.parentNode.classList.add("border")
        } else if (e.target.classList.contains('five')) {
            slides.style.transform = 'translateX(-48.8%)'
            e.target.classList.add('six')
            e.target.parentNode.classList.add("border")
        } else if (e.target.classList.contains('six')) {
            slides.style.transform = 'translateX(-61.1%)'
            e.target.classList.add('active')
            e.target.parentNode.classList.add("border")
        }
    }
});