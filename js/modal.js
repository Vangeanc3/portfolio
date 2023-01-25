const btn1 = document.getElementById("projeto1");
const btn2 = document.getElementById("projeto2");
const btn3 = document.getElementById("projeto3");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

const wrapper1 = document.getElementById("modal-wrapper1")
const wrapper2 = document.getElementById("modal-wrapper2")
const wrapper3 = document.getElementById("modal-wrapper3")

btn1.addEventListener("click", () => {
   if (modal1.classList.contains("fechaModal")) {
      modal1.classList.remove("fechaModal")
   }
   modal1.classList.add("visible");
   wrapper1.classList.add("modalAnimado");
})

modal1.addEventListener("click", function (event) {
   if (event.target === modal1) {
      if (modal1.classList.contains("visible")) {
         modal1.classList.add("fechaModal");
         setTimeout(() => { modal1.classList.remove("visible") }, 1000)
      }
      wrapper1.classList.remove("modalAnimado");
   }
});

btn2.addEventListener("click", () => {
   if (modal2.classList.contains("fechaModal")) {
      modal2.classList.remove("fechaModal")
   }
   modal2.classList.add("visible");
   wrapper2.classList.add("modalAnimado");
})

modal2.addEventListener("click", function (event) {
   if (event.target === modal2) {
      if (modal2.classList.contains("visible")) {
         modal2.classList.add("fechaModal");
         setTimeout(() => { modal2.classList.remove("visible") }, 1000)
      }
      wrapper2.classList.remove("modalAnimado");
   }
});

btn3.addEventListener("click", () => {
   if (modal3.classList.contains("fechaModal")) {
      modal3.classList.remove("fechaModal")
   }
   modal3.classList.add("visible");
   wrapper3.classList.add("modalAnimado");
})

modal3.addEventListener("click", function (event) {
   if (event.target === modal3) {
      if (modal3.classList.contains("visible")) {
         modal3.classList.add("fechaModal");
         setTimeout(() => { modal3.classList.remove("visible") }, 1000)
      }
      wrapper3.classList.remove("modalAnimado");
   }
});