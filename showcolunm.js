let next1 = document.querySelector(".colunm-btn")
let next2 = document.querySelector(".colunm-btn2")
let next3 = document.querySelector(".colunm-btn2")

let primeiraColunm = document.querySelector(".primeira-coluna")
let segundaColunm = document.querySelector(".segunda-coluna")
let terceiraColunm = document.querySelector(".terceira-coluna")

next1.addEventListener("click", () => {
    primeiraColunm.style.display = "none"
    segundaColunm.style.display = "block"
})

next2.addEventListener("click", () => {
    segundaColunm.style.display = "none"
    terceiraColunm.style.display = "block"
})

next3.addEventListener("click", () => {
    terceiraColunm.style.display = "none"
    primeiraColunm.style.display = "block"
})