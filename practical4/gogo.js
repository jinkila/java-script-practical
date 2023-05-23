// let btnScenery = document.querySelectorAll('.btnScenery');
// btnScenery.forEach(btnScenery =>{
//     btnScenery.addEventListener('click',() =>{
//         btnScenery.toggle('active');
//     })
let btnScenery = document.getElementById('btnScenery');
let btnNearby = document.getElementById('btnNearby');
let btnTrekking = document.getElementById('btnTrekking');
//grab the conatiner
let sceneryBox = document.getElementById('scenery')
let nearbyBox = document.getElementById('nearby')
let trekkingBox = document.getElementById('trekking')

//colorchange ya dikin//
btnScenery.style.background="yellow"
btnScenery.addEventListener('click', () =>{
  sceneryBox.style.display = 'block';
  trekkingBox.style.display = 'none';
  nearbyBox.style.display = 'none';
  btnScenery.style.background="yellow"
  btnNearby.style.background="white"
  btnTrekking.style.background="white"
  

});
btnNearby.addEventListener('click', () =>{
    sceneryBox.style.display = 'none';
    trekkingBox.style.display = 'none';
    nearbyBox.style.display = 'block';
    btnNearby.style.background="yellow"
    btnScenery.style.background="white"
  
    btnTrekking.style.background="white"
  
  });
  btnTrekking.addEventListener('click', () =>{
    sceneryBox.style.display = 'none';
    trekkingBox.style.display = 'block';
    nearbyBox.style.display = 'none';
    btnTrekking.style.background="yellow"
    btnScenery.style.background="white"
    btnNearby.style.background="white"
   
  
  });

   