class Next{
    constructor(btn, colunm, colunm2, colunm3){
        this.botao = document.querySelectorAll(btn)
        this.coluna = document.querySelector(colunm)
        this.coluna2 = document.querySelector(colunm2)
        this.coluna3 = document.querySelector(colunm3)
    }

    clique(){
        this.botao[0].onclick = () =>{
            this.coluna.style.display = "none"
            this.coluna2.style.display = "block"
        }
        this.botao[1].onclick = () =>{
            this.coluna2.style.display = "none"
            this.coluna3.style.display = "block"
        }
        this.botao[2].onclick = () =>{
            this.coluna3.style.display = "none"
            this.coluna.style.display = "block"
        }
    }
}

const next1 = new Next(".colunm-btn", ".primeira-coluna", ".segunda-coluna", ".terceira-coluna") 
next1.clique()