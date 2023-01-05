class Slide{
    constructor(imagens, imgContainer){
        this.imagens = document.getElementById(imagens)
        this.imgContainer = document.querySelectorAll(imgContainer)
        this.idx = 0
    }
}

const slide = new Slide("carrosel", ".container-teste div")

function Carrosel(imagens, imgContainer, i){

    i++

    if (i > imgContainer.length - 1){
        i = 0
    }

    imagens.style.transform = `translateX(${-i * 540}px)`

}

let time = 400
setTimeout(Carrosel(slide.imagens, slide.imgContainer, slide.idx), time)


const imgs = document.getElementById("carrosel");
const img = document.querySelectorAll(".container-teste div");

let idx = 0;

function carrosel(){
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 540}px)`;
}

setInterval(carrosel, 4000);