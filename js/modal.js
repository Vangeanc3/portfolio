var btn1 = document.getElementById("projeto1");
var btn2 = document.getElementById("projeto2");
var btn3 = document.getElementById("projeto3");

btn1.addEventListener("click", () => {
   let modal = document.getElementById("modal1");
   let modalBtn = document.querySelector(".modal-fechar")
   Flex(modal)
   None(modalBtn, modal1);
})

btn2.addEventListener("click", () => {
   let modal = document.getElementById("modal2");
   Flex(modal)
   None(modal);
})

btn3.addEventListener("click", () => {
   let modal = document.getElementById("modal3");
   Flex(modal)
   None(modal);
})

const None = (elemento, modal) => {
   elemento.addEventListener("click", () => {
      modal.style.display = "none";
      document.querySelector("body").style.overflowY = "visible";
   })
};

const Flex = (elemento) => {
      elemento.style.display = "flex";
      document.querySelector("body").style.overflowY = "hidden";
      elemento.style.opacity = "0"
   }

