const drop = document.querySelectorAll(".drop");
// const arrowBaixo = document.querySelectorAll(".arrowbaixo");
// const arrowCima = document.querySelectorAll(".arrowbaixo");


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
        // this.children[0].children[0].style.display = "inline-block";     
        // this.children[0].children[1].style.display = "none";  
    }else{
        drop.forEach(element => element.classList.remove('active'));
        this.children[1].classList.add("active"); //children retorna os filhos de um elemento nesse caso pegamos apenas o filho [1]         
        // this.children[0].children[0].style.display = "none";     
        // this.children[0].children[1].style.display = "inline-block";       
    }       
    
    /*
    childNodes - retorna uma NodeList dos elementos filhos.
    childElementCount - retorna a quantidade de filhos que aquele elemento possui
    children - retorna um vetor com os elementos filhos    
*/
}
// arrowRotate();
// function arrowRotate(){    
//     for(let i = 0; i < arrow.length; i++){
//             if(arrow[i])
        
//     }
// }
     


