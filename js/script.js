const drop = document.querySelectorAll(".drop");
document.querySelector('.open-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);

function openMenu(){
  document.body.classList.add('menu-expended');
}
function closeMenu(){
  document.body.classList.remove('menu-expended');
}


document.querySelectorAll('.accordion-item').forEach(item => item.addEventListener('click', activeMenu)) ; 

function activeMenu(){
    if(this.children[1].classList.contains("active")){
        this.children[1].classList.remove("active");
    }else{
        drop.forEach(element => element.classList.remove('active'));
        this.children[1].classList.add("active"); //children retorna os filhos de um elemento nesse caso pegamos apenas o filho [1]
    }   
    /*
    childNodes - retorna uma NodeList dos elementos filhos.
    childElementCount - retorna a quantidade de filhos que aquele elemento possui
    children - retorna um vetor com os elementos filhos
*/
}
     


