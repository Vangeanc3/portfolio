const divs = document.getElementById("carrosel2");
const div = document.querySelectorAll(".container-teste2 div");

let i = 0;

function carrosel(){
    i++;

    if (i > div.length - 1) {
        i = 0;
    }

    divs.style.transform = `translateX(${-i * 540}px)`;
}

setInterval(carrosel, 4000);