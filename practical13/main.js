const WESTT = document.querySelector('.west');
const SOUTHH = document.querySelector('.south');
const NORTHH = document.querySelector('.north');
const box11 = document.querySelector('.box1');
const box22 = document.querySelector('.box2');
const box33 = document.querySelector('.box3');
const EASTT = document.querySelector('.east');
const box44 = document.querySelector('.box4');




WESTT.addEventListener('click',function() {
    WESTT.style.display="none"
    SOUTHH.style.display="flex";
    NORTHH.style.display="none"
    EASTT.style.display="none"
    box11.style.display="none"
    box22.style.display="flex"
    box33.style.display="none"
    box44.style.display="none"
  
});
SOUTHH.addEventListener('click',function() {
    SOUTHH.style.display="none"
    NORTHH.style.display="flex"
    WESTT.style.display = 'none';
    EASTT.style.display="none"
    box11.style.display="none"
    box22.style.display="none"
    box33.style.display="flex"
    box44.style.display="none"

});
NORTHH.addEventListener('click',function() {
   
    SOUTHH.style.display="none";
    NORTHH.style.display="none"
    WESTT.style.display ="none";
    EASTT.style.display="flex"
    box11.style.display="none"
    box22.style.display="none"
    box33.style.display="none"
    box44.style.display="flex"

});
EASTT.addEventListener('click',function() {
    WESTT.style.display="flex"
    SOUTHH.style.display="none";
    NORTHH.style.display="none"
    EASTT.style.display="none"
    box11.style.display="flex"
    box22.style.display="none"
    box33.style.display="none"
    box44.style.display="none"
  
});

 


