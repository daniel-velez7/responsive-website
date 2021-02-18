const monForm = document.querySelector('#monForm')
const inputNb = document.querySelector('#inputNb')
const monTitre = document.querySelector('#monTitre')

const nombreATrouver = Math.floor(Math.random() * 100) + 1

let compteur = 0


monForm.addEventListener('submit', event => {
    event.preventDefault()
    compteur++
 

    if(inputNb.value < nombreATrouver){
        monTitre.innerHTML = 'Le nombre à trouver est plus grand'
    } else if (inputNb.value > nombreATrouver){
        monTitre.innerHTML = 'Le nombre à trouver est plus petit'
    } else {
        monTitre.innerHTML = 'Bravo vous avez gagné en ' + compteur + ' coups'
    }
})

