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