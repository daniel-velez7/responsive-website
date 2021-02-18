const monForm = document.querySelector('#monForm')

let randomNumber = (Math.floor(Math.random() * 100))

console.log(randomNumber)



let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})


monForm.addEventListener('submit', function(event){
        event.preventDefault()
    
        console.log(inputPrenom.value)
    
        monTitre.innerHTML = inputPrenom.value
    })  





// const monForm = document.querySelector('#monForm')
// const inputPrenom = document.querySelector('#inputPrenom')
// const monTitre = document.querySelector('#monTitre')


// monForm.addEventListener('submit', function(event){
//     event.preventDefault()

//     console.log(inputPrenom.value)

//     monTitre.innerHTML = inputPrenom.value
// })  

// generer un nombre aleatoire entre 1 - 100 verifier console log garder ca dans une variable
