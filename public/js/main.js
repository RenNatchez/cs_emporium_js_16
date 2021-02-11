let body = document.querySelector(`body`)

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

let tagModal = document.querySelector('#connexion')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.fa-window-close')

let modalInscription = document.querySelector('.input-inscription')
let modalConnexion = document.querySelector('.input-connexion')

let btnInscription = document.querySelector('.inscription')
let btnConnexion = document.querySelector('.connexion')
let closeConnexion = document.querySelector('.submit')
let closeInscription = document.querySelector('.btn-inscription')

//ouvrir modal
tagModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = 'block'
    modalConnexion.style.display = 'block'
    modalInscription.style.display = 'none'
    modal.style.boxShadow = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    body.style.overflowY = 'hidden'
})
let connexionIpad = document.querySelector(`#connexion-ipad`)
connexionIpad.addEventListener('click', (e) => {
    e.preventDefault()
    nav.style.width = "0%"
    modal.style.display = 'block'
    modalConnexion.style.display = 'block'
    modalInscription.style.display = 'none'
    modal.style.boxShadow = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    body.style.overflowY = 'hidden'
})

//fermer modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    body.style.overflowY = 'auto'
})
closeConnexion.addEventListener('click', () => {
    modal.style.display = 'none'
    body.style.overflowY = 'auto'
})
closeInscription.addEventListener('click', () => {
    modal.style.display = 'none'
    body.style.overflowY = 'auto'
})

//Afficher modal connexion
btnConnexion.addEventListener('click', () => {
    modalConnexion.style.display = 'block'
    modalInscription.style.display = 'none'
})
//Afficher modal inscription
btnInscription.addEventListener('click', () => {
    modalInscription.style.display = 'block'
    modalConnexion.style.display = 'none'
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

// carousel 
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



// menu déroulant
let titreCache = document.querySelector('#titre_schrol')
let containeurNav = document.querySelector('.container')
let titreNav = document.querySelector('.nav-titre')

window.addEventListener('scroll', function () {
    if (window.scrollY>200) {
        titreCache.style.display = 'block'
        containeurNav.style.position ='fixed'
        containeurNav.style.top ='0px'
        titreNav.style.display ='none'
    } else{
        titreCache.style.display = 'none'
        containeurNav.style.position ='relative'
        titreNav.style.display ='block'
    }
})

// darkmode
    //select btn
let btnLight =  document.querySelector('.light')
let btnDark =  document.querySelector('.dark')
    //Select les choses a mettre en dark
let bgTitre =  document.querySelector('.nav-titre')
let bgContainer =  document.querySelector('.container')
let bgFooter =  document.querySelector('.tag')


btnLight.addEventListener('click', () => {
    body.style.backgroundColor = "white"
    body.style.color = "black"
    bgTitre.style.backgroundColor = "white"
    containeurNav.style.backgroundColor = "white"
    bgFooter.style.backgroundColor = '#343a40'
    for (let i = 0; i <  9; i++) {
        var bgProduitInfo =  document.querySelectorAll('.produit-info')[i]
        bgProduitInfo.style.backgroundColor = "white"
    }
    for (let i = 0; i <  9; i++) {
        var bgCardText =  document.querySelectorAll('.cart-text')[i]
        bgCardText.style.backgroundColor = "white"
    }
})
btnDark.addEventListener('click', () => {
    body.style.backgroundColor = "black"
    body.style.color = "white"
    bgTitre.style.backgroundColor = "black"
    containeurNav.style.backgroundColor = "black"
    bgFooter.style.backgroundColor = 'black'
    for (let i = 0; i <  9; i++) {
        var bgProduitInfo =  document.querySelectorAll('.produit-info')[i]
        bgProduitInfo.style.backgroundColor = "black"
    }
    for (let i = 0; i <  9; i++) {
        var bgCardText =  document.querySelectorAll('.cart-text')[i]
        bgCardText.style.backgroundColor = "black"
    }
})
