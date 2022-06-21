const accordionItem = document.querySelectorAll('.accordion-item');
accordionItem.forEach(item => item.addEventListener('click', activeMenu)) ;

document.querySelector('.open-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);


function openMenu(){
  document.body.classList.add('menu-expended');
}
function closeMenu(){
  document.body.classList.remove('menu-expended');
}
function activeMenu(){    
    if(this.classList.contains("active")){                
        this.classList.remove("active");       
    }else{        
        accordionItem.forEach(element => element.classList.remove('active'));
        this.classList.add("active");         
    /*
        // this.children[1].classList.add("active");
        //children retorna os filhos de um elemento nesse caso pegamos apenas o filho [1] 
        
        // this.children[1].children[2].classList.add("active");
        //podemos pegar tbm o filho do filho, neste caso, estamos pegando o filho 2 do filho 1 de acordionItem

        - childNodes - retorna uma NodeList dos elementos filhos.
        - childElementCount - retorna a quantidade de filhos que aquele elemento possui
        - children - retorna um vetor com os elementos filhos          
        - previousElementSibling - propriedade retorna o elemento anterior no mesmo nível de árvore.
        - nextElementSibling - retorna o próximo elemento no mesmo nível de árvore. 
    */
    }  
}

     


