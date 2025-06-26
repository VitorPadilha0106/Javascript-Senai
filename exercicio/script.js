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




button03.addEventListener("click", (event) => {

    button03 != false 

    const mudar = button03 == true ? : false


})

    