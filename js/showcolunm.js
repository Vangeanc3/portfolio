class Next{
    constructor(btn, colunm){
        this.botao = document.querySelectorAll(btn)
        this.coluna = document.querySelectorAll(colunm)
    }

    clique(){
        this.botao[0].onclick = () =>{
            this.coluna[0].style.display = "none"
            this.coluna[1].style.display = "block"
        }
        this.botao[1].onclick = () =>{
            this.coluna[1].style.display = "none"
            this.coluna[2].style.display = "block"
        }
        this.botao[2].onclick = () =>{
            this.coluna[2].style.display = "none"
            this.coluna[0].style.display = "block"
        }
    }
}

const next1 = new Next(".colunm-btn", ".coluna") 
next1.clique()