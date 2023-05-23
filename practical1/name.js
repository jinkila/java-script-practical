
let changecount = document.getElementById("counter");

// let addbutton = document.getElementById("cbtn");

// let savebutton = document.getElementById("sbtn");
let personsperhour = document.getElementById("personsperhour");


let countnumb = 0;
function count(){
    let counting = countnumb+=1;
    changecount.innerHTML = counting;
    
}
function save(){
    changecount.innerHTML= "0"
   let getcount =  personsperhour.innerHTML;
   let add = getcount + countnumb + "|"
   personsperhour.innerHTML = add;

}
function resetbutton(){
  personsperhour.innerHTML = "person per hour 0";  

}


