//so here we have to get hours , minutes and seconds
//we gonna store them in let because we need to change

setInterval(()=>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');


    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');
    
    let h = new Date().getHours();
    // let h = 19;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a =" ";
    if(h>=12){
     
       ampm.innerText = "PM";
    }else{
        ampm.innerText = "AM";
      
    }
    
    //making the clock of 12 hours only
    if(h>12){
        h = h-12;
    }
    
    //Adding 0 before single digit hour minute or second
    if(h<10){
        h= '0' + h;
    }
    if(m<10){
        m= '0'+m;
    }
    if(s<0){
        s = '0'+s;
    }
    hours.innerHTML = h+"<br><span>Hours</span></br>";
    minutes.innerHTML = m+"<br><span>Minutes</span></br>";
    seconds.innerHTML = s+"<br><span>Seconds</span></br>";
    hh.style.strokeDashoffset = 440 - (440*h)/12; // 12 hour clock
    mm.style.strokeDashoffset = 440 - (440*m)/60; //60 min 
    ss.style.strokeDashoffset = 440 - (440*s)/60; //60 second 


    hr_dot.style.transform = `rotate(${h*30}deg)`;
    //360/12 = 30
    min_dot.style.transform =`rotate(${m*6}deg)`;
    sec_dot.style.transform =`rotate(${s*6}deg)`;
},1000)




