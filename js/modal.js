var btn1 = document.getElementById("projeto1");
var btn2 = document.getElementById("projeto2");
var btn3 = document.getElementById("projeto3");

btn1.addEventListener("click", () => {
   let modal1 = document.getElementById("modal1");
   Flex(modal1)
   None(modal1);
})

btn2.addEventListener("click", () => {
   let modal2 = document.getElementById("modal2");
   Flex(modal2)
   None(modal2);
})

btn3.addEventListener("click", () => {
   let modal3 = document.getElementById("modal3");
   Flex(modal3)
   None(modal3);
})

const None = (elemento) => {
   elemento.addEventListener("click", () => {
      elemento.style.display = "none";
      document.querySelector("body").style.overflowY = "visible";
   })
};

const Flex = (elemento) => {
      elemento.style.display = "flex";
      document.querySelector("body").style.overflowY = "hidden";
   }

