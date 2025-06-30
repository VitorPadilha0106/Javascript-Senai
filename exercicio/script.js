// ! Exercicio 01

const h2 = document.querySelector("#titulo")
const p = document.querySelector("#paragrafo")
const button01 = document.querySelector("#mudar")

button01.addEventListener("click", (event) => {

    h2.innerHTML = "<i>Mudou</i>"
    p.innerHTML = "<i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eaque soluta autem, veritatis mollitia ad adipisci consequatur voluptate incidunt odit sit quam corporis minus rem. Distinctio id in at praesentium.</i>"

})

// ! Exercicio 02

const div = document.querySelector("#box")
const button02 = document.querySelector("#mudarCor")

div.style.marginTop = "50px"
div.style.width = "100px"
div.style.height = "100px"
div.style.backgroundColor = "blue"

button02.addEventListener("click", (event) => {

    div.style.backgroundColor = "red"

})

// ! Exercicio 03

const p02 = document.querySelector("#texto")
const button03 = document.querySelector("#alterar")
let isButtonOn = false

button03.addEventListener("click", (event) => {

    isButtonOn = !isButtonOn;

    p02.style.visibility = isButtonOn ? "visible" : "hidden"

})

// ! Exercicio 04


const counter = document.querySelector("#contador")
const button04 = document.querySelector("#botaoAumentar")


button04.addEventListener("click", (event) => {


    counter.textContent = Number(counter.textContent) + 1


})


// ! Exercicio 05


const imagens = [
    "https://media.tenor.com/jwHkGGFNoH8AAAAe/shiny-charmander-pokemon.png",
    "https://media.tenor.com/Kal1GGUVeD8AAAAe/shiny-charmeleon-pokemon.png",
    "https://media.tenor.com/ptl9U5YvK_wAAAAe/shiny-charizard-fire.png",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPDUDK23FNobuSSd967b5SCYqeKX7ENI1qWzCRmzQyf9WGhY4Y",
    "https://pm1.aminoapps.com/7271/c8f36f9f3823ec8c1952a0e46fca9bec9db90412r1-478-350v2_hq.jpg",
    "https://art.pixilart.com/f0dd71c425e45d5.png",
    "https://art.pixilart.com/thumb/86908fff64d3e0f.png",
    "https://kandipad.com/assets/images/projects/pp/pp1872-2c67aed6-shiny-ivysaur.png",
    "https://media.tenor.com/F4f1lhe14lgAAAAe/venusaur-shiny.png"
];

const img = document.querySelector("#imagem")
const button05 = document.querySelector("#mudarImagem")
let contador = 0

img.style.width = "200px"

button05.style.display = "flex"
button05.style.marginTop = "20px"

button05.addEventListener("click", (event) => {

    contador ++

    if (contador > 8){

        contador = 0

     }

    img.setAttribute("src", imagens[contador])

})

