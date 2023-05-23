 
 function showtime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    session = "am";
    
    if(hour > 12){
        hour = 12;
        session = "pm";

    }
    if (hour == 0){
        hr = 12;
        session = "pm";
    }
 }