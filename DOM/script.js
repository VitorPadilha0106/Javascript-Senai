const h1_1 = document.querySelector("#titulo1")
const h1_2 = document.querySelector("#titulo2")
const li = document.querySelectorAll(".lista")
const img = document.querySelector(".imagem")
const button = document.querySelector("#botao")
console.log(h1_1)

// ! Manipulando HTML com JS

// ? textContent: somente escrita

h1_1.textContent = "Mudou"

// ? innerHTML: texto com tag de estilo (<b></b>, <i></i>, <strong></strong>, etc...)

h1_2.innerHTML = "<i><strong>Mudou</strong></i>"

// ! Manipulando Atributos com JS

console.log(img)
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThN3ggq5Uhyo2R-dD7Q4a2rWO3iXLJkL2wAA&s")

img.style.height = "100px"
img.style.border = "1px solid black"
img.style.padding = "10px"

h1_1.addEventListener("click", (event) => {

    h1_1.style.color = "red"

})

button.style.display = "flex"

button.addEventListener("click", (event) => {

    img.setAttribute("src", "https://img.pokemondb.net/artwork/large/lucario.jpg")

})

function trocar(){

    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThN3ggq5Uhyo2R-dD7Q4a2rWO3iXLJkL2wAA&s")

}


// document.write("<h1>algo</h1>")