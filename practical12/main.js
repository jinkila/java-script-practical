const nextbtn = document.querySelector('.proceed');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const previousbtn = document.querySelector('.proceed2');
const proceedbtn = document.querySelector('.back');
const box3 = document.querySelector('.box3');
const backbtn = document.querySelector('.back3');
const confirmbtn = document.querySelector('.confirm');

const radioE = document.querySelectorAll('input[name="b"]');
const ft01 = document.getElementById('fto1');
const ft02 = document.getElementById('fto2');
const ft03 = document.getElementById('fto3');

nextbtn.addEventListener('click',function() {
   
    box1.style.display="none";
    box2.style.display = 'flex';

});
previousbtn.addEventListener('click',function(){

    box2.style.display="none"
    box1.style.display ='flex';
});
proceedbtn.addEventListener('click',function(){
    box2.style.display="none"
    box3.style.display ='flex';


})
backbtn.addEventListener('click',function(){
    box2.style.display="flex"
    box3.style.display ='none';
})
confirmbtn.addEventListener('click',function(){
    box2.style.display="none"
    box3.style.display ='none';
    box1.style.display = "none";
})

// radioE.forEach(radio => radio.addEventListener('change', () => {
//     fto1.style.display="flex"
//     fto2.style.display ='none';
//     fto3.style.display = "none";
    

// }))








