const btn1 = document.getElementById("projeto1");
const btn2 = document.getElementById("projeto2");
const btn3 = document.getElementById("projeto3");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

const wrapper1 = document.getElementById("modal-wrapper1")
const wrapper2 = document.getElementById("modal-wrapper2")
const wrapper3 = document.getElementById("modal-wrapper3")

const btnFechar1 = document.querySelector("#modal-fechar1");
const btnFechar2 = document.querySelector("#modal-fechar2");
const btnFechar3 = document.querySelector("#modal-fechar3");

// FUNÇÃO QUE VAI ABRIR O MODAL:
const abrirModal = (modal, wrapper) => {
   if (modal.classList.contains("fechaModal")) {
      modal.classList.remove("fechaModal")
   }
   modal.classList.add("visible");
   wrapper.classList.add("modalAnimado");
   document.querySelector("body").style.overflowY = "hidden";
}

btn1.addEventListener("click", () => abrirModal(modal1, wrapper1))
btn2.addEventListener("click", () => abrirModal(modal2, wrapper2))
btn3.addEventListener("click", () => abrirModal(modal3, wrapper3))

//FUNÇÃO QUE VAI FECHAR O MODAL QUANDO CLICADO FORA DELE:
const fecharModal = (event, modal, wrapper) => { 
   if (event.target === modal) {
      if (modal.classList.contains("visible")) {
         modal.classList.add("fechaModal");
         setTimeout(() => { modal.classList.remove("visible") }, 1000)
      }
      wrapper.classList.remove("modalAnimado");
      document.querySelector("body").style.overflowY = "auto";
   }
}

modal1.addEventListener("click", (event) => fecharModal(event, modal1, wrapper1))
modal2.addEventListener("click", (event) => fecharModal(event, modal2, wrapper2));
modal3.addEventListener("click", (event) => fecharModal(event, modal3, wrapper3));

//FUNÇÃO QUE VAI FECHAR O MODAL QUANDO CLICAR NO BOTÃO DE FECHAR:
const fecharModalBtn = (modal, wrapper) => {
   if (modal.classList.contains("visible")) {
      modal.classList.add("fechaModal");
      setTimeout(() => { modal1.classList.remove("visible") }, 1000)
   }
   wrapper.classList.remove("modalAnimado");
   document.querySelector("body").style.overflowY = "auto";
}

btnFechar1.addEventListener("click", () => fecharModalBtn(modal1, wrapper1))
btnFechar2.addEventListener("click", () => fecharModalBtn(modal2, wrapper2))
btnFechar3.addEventListener("click", () => fecharModalBtn(modal3, wrapper3))