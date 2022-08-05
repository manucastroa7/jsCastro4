let formulario = document.querySelector('#formulario')
let mensajeError = document.querySelector('.error')
let cantidad = document.querySelector('input[type="number"]')


formulario.addEventListener('submit', submit)

function submit(e) {

    e.preventDefault()
    console.log(e)
    let formArray = e.target
    console.log(e)


    let cantidadPax = formArray[4]

    console.log(cantidadPax)


    if (cantidadPax.value > 5) {
        mensajeError.style.display = 'block'
        mensajeError.innerText = 'Error! deben ser menos de 5 pasajeros'
        mensajeError.style.color = 'red'
    } else {
        mensajeError.style.display = 'none'
    }


}

let titulo = document.querySelector('.titulo')

titulo.innerText = 'Grupo Hotelero Palikao'
titulo.style.color = 'Green'

let sumar = document.querySelector('.sumar')
let restar = document.querySelector('.restar')
let numero = document.querySelector('.numero')
let contador = 0 

sumar.addEventListener ('click', function (e) {
    contador += 1
    numero.innerText = contador
})

restar.addEventListener ('click', function (e) {
    contador -= 1
    numero.innerText = contador
})






