var btn1 = document.getElementById("projeto1");
var btn2 = document.getElementById("projeto2");
var btn3 = document.getElementById("projeto3");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

let modalBtn1 = document.querySelector(".modal-fechar")
// btn1.addEventListener("click", () => {
//    let modal = document.getElementById("modal1");
//    let modalBtn = document.querySelector(".modal-fechar")
//    Flex(modal)
//    None(modalBtn, modal1);
// })


modalBtn1.addEventListener("click", () =>{
   modal1.classList.remove("visible")
})

btn1.addEventListener("click", () => {
   
   modal1.classList.add("visible");
})

modal1.addEventListener("click", function (event) {
   if (event.target === modal1) { modal1.classList.remove("visible"); }
});

btn2.addEventListener("click", () => {
   modal2.classList.add("visible");
})

modal2.addEventListener("click", function (event) {
   if (event.target === modal2) { modal2.classList.remove("visible"); }
});

btn3.addEventListener("click", () => {
   modal3.classList.add("visible");
})

modal3.addEventListener("click", function (event) {
   if (event.target === modal3) { modal3.classList.remove("visible"); }
});

// btn2.addEventListener("click", () => {
//    let modal = document.getElementById("modal2");
//    Flex(modal)
//    None(modal);
// })

// btn3.addEventListener("click", () => {
//    let modal = document.getElementById("modal3");
//    Flex(modal)
//    None(modal);
// })

// const None = (elemento, modal) => {
//    elemento.addEventListener("click", () => {
//       modal.style.display = "none";
//       document.querySelector("body").style.overflowY = "visible";
//    })
// };

// const Flex = (elemento) => {
//    elemento.style.display = "flex";
//    document.querySelector("body").style.overflowY = "hidden";
//    elemento.style.opacity = "0"
// }

