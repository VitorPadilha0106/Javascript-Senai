// ! Exercicio 06

const h1 = document.querySelector("#mostrar")
const input = document.querySelector("#escrever")

input.addEventListener("input", (event) => {

    const escrita = event.target.value

    h1.textContent = escrita

    if(escrita == ""){

        h1.textContent = "Texto Digitado..."

    }

})

// ! Exercicio 07

const img = document.querySelector("#imagem")
const btnAumentar = document.querySelector("#aumentarImg")
const btnDiminuir = document.querySelector("#diminuirImg")
const btnVoltar = document.querySelector("#voltar")

img.style.width = "100px"

btnAumentar.addEventListener("click", (event) => {
   img.style.width = "200px"
})

btnDiminuir.addEventListener("click", (event) => {
    img.style.width = "50px"
 })

 btnVoltar.addEventListener("click", (event) => {
    img.style.width = "100px"
 })

// ! Exercicio 08

const resultado = document.querySelector("#valorDaSoma")

const btnSomar = document.querySelector("#somar")

btnSomar.addEventListener("click", (event) => {

    const input01 = document.querySelector("#valor1").value

    const input02 = document.querySelector("#valor2").value

    const valor1 = parseInt(input01)
    const valor2 = parseInt(input02)

    const soma = valor1 + valor2

    resultado.textContent = soma
})

// ! Exercicio 09

const btnWhite = document.querySelector("#white")

const btnRed = document.querySelector("#red")

const btnBlue = document.querySelector("#blue")

const btnYellow = document.querySelector("#yellow")

const btnPurple = document.querySelector("#purple")

const btnGreen = document.querySelector("#green")

const btnBlack = document.querySelector("#black")

const body = document.querySelector("body")

btnWhite.addEventListener("click", (event) =>{

    body.style.backgroundColor = "white"
    body.style.color = "black"

})

btnRed.addEventListener("click", (event) =>{

    body.style.backgroundColor = "red"
    body.style.color = "white"

})

btnBlue.addEventListener("click", (event) =>{

    body.style.backgroundColor = "blue"
    body.style.color = "white"

})

btnYellow.addEventListener("click", (event) =>{

    body.style.backgroundColor = "yellow"
    body.style.color = "black"

})

btnPurple.addEventListener("click", (event) =>{

    body.style.backgroundColor = "purple"
    body.style.color = "white"

})

btnGreen.addEventListener("click", (event) =>{

    body.style.backgroundColor = "green"
    body.style.color = "white"

})

btnBlack.addEventListener("click", (event) =>{

    body.style.backgroundColor = "black"
    body.style.color = "white"

})

// ! Exercicio 10

const Texto02 = document.querySelector("#textoAlterado")
const btnNegrito = document.querySelector("#negrito")
const btnItalico = document.querySelector("#italico")
const btnRed02 = document.querySelector("#colorRed")
const btnBlue02 = document.querySelector("#colorBlue")
const btnCentralizar = document.querySelector("#centralizar")
const btnVoltar02 = document.querySelector("#voltar02")

Texto02.style.fontSize = "30px"

btnNegrito.addEventListener("click", (event) => {

    Texto02.style.fontWeight = "bold"

})

btnItalico.addEventListener("click", (event) => {

    Texto02.style.fontStyle = "italic"

})

btnRed02.addEventListener("click", (event) => {

    Texto02.style.color = "red"

})

btnBlue02.addEventListener("click", (event) => {

    Texto02.style.color = "blue"

})

btnCentralizar.addEventListener("click", (event) => {

    Texto02.style.display = "flex"
    Texto02.style.justifyContent = "center"

})

btnVoltar02.addEventListener("click", (event) => {

    Texto02.style.color = "black"
    Texto02.style.fontStyle = "normal"
    Texto02.style.fontWeight = ""
    Texto02.style.display = ""
    Texto02.style.justifyContent = " "
    

})