const drop = document.querySelectorAll(".drop");

document.querySelectorAll('.accordion-item').forEach(botao => botao.addEventListener('click', function(){    
    
    if(this.children[1].classList.contains("active")){
        this.children[1].classList.remove("active");
    }else{
        this.children[1].classList.add("active"); //children retorna os filhos de um elemento nesse caso pegamos apenas o filho [1]
    }      
}));
/*
    childNodes - retorna uma NodeList dos elementos filhos.
    childElementCount - retorna a quantidade de filhos que aquele elemento possui
    children - retorna um vetor com os elementos filhos
*/
