const imgs = document.getElementById("img");
const img = document.querySelectorAll(".container img");

let idx = 0;

function carrosel(){
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 420}px)`;
}

setInterval(carrosel, 4000);