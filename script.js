function currentTime() {
  var milTime;
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let day = date.getDay();
  
   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm; 
  
   let time = parseInt(hh,10) + ":" + mm;
   if(parseInt(hh,10) > 12){
     time = parseInt((parseInt(hh, 10) - 12), 10) + ":" + mm;
   }
  if(parseInt(hh,10) > 11){
     time = time + "PM";
   }
  else{
    time = time + "AM";
  }
//wednesday:
 
  milTime = parseInt((hh*100),10) + parseInt(mm,10);
  console.log(milTime);
  if(window.location.href == "https://slams-schedule.analyze185.repl.co/pages/wednesday.html" || window.location.href == "https://slams-schedule.analyze185.repl.co/pages/monday.html" || window.location.href == "https://slams-schedule.analyze185.repl.co/pages/friday.html"){
    
    if(milTime > 814 && milTime < 845){
      document.getElementById('band').innerText = "Band: Rover";
    }
    else if(milTime > 845 && milTime < 850){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 850 && milTime < 955){
      document.getElementById('band').innerText = "Band: A";
    }
    else if(milTime > 955 && milTime < 1000){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1000 && milTime < 1105){
      document.getElementById('band').innerText = "Band: B";
    }
    else if(milTime > 1105 && milTime < 1110){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1110 && milTime < 1225){
      document.getElementById('band').innerText = "Lunch & Advisory";
    }
    else if(milTime > 1225 && milTime < 1230){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1230 && milTime < 1300){
      document.getElementById('band').innerText = "Second Rover";
    }
    else if(milTime > 1300 && milTime < 1305){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1305 && milTime < 1410){
      document.getElementById('band').innerText = "Band: C";
    }
    else if(milTime > 1410 && milTime < 1215){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1415 && milTime < 1520){
      document.getElementById('band').innerText = "Band: D";
    }
    else if(milTime > 1520){
      document.getElementById('band').innerText = "After School";
    }
    else{
      document.getElementById('band').innerText = "Passing Period";
    }
  }//end of wednesday, monday, and friday
  if(window.location.href == "https://slams-schedule.analyze185.repl.co/pages/thursday.html" || window.location.href == "https://slams-schedule.analyze185.repl.co/pages/tuesday.html"){
    
    if(milTime > 814 && milTime < 845){
      document.getElementById('band').innerText = "Band: Rover";
    }
    else if(milTime > 845 && milTime < 850){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 850 && milTime < 955){
      document.getElementById('band').innerText = "Band: C";
    }
    else if(milTime > 955 && milTime < 1000){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1000 && milTime < 1105){
      document.getElementById('band').innerText = "Band: D";
    }
    else if(milTime > 1105 && milTime < 1110){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1110 && milTime < 1225){
      document.getElementById('band').innerText = "Lunch & Advisory";
    }
    else if(milTime > 1225 && milTime < 1230){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1230 && milTime < 1300){
      document.getElementById('band').innerText = "Second Rover";
    }
    else if(milTime > 1300 && milTime < 1305){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1305 && milTime < 1410){
      document.getElementById('band').innerText = "Band: A";
    }
    else if(milTime > 1410 && milTime < 1215){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1415 && milTime < 1520){
      document.getElementById('band').innerText = "Band: B";
    }
    else if(milTime > 1520){
      document.getElementById('band').innerText = "After School";
    }
    else{
      document.getElementById('band').innerText = "Passing Period";
    }
  }//end of thursday and tuesday
  if(window.location.href == "https://slams-schedule.analyze185.repl.co/pages/minicoursewednesday.html"){
    
    if(milTime > 814 && milTime < 910){
      document.getElementById('band').innerText = "Band: Rover";
    }
    else if(milTime > 910 && milTime < 915){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 915 && milTime < 1000){
      document.getElementById('band').innerText = "Band: A";
    }
    else if(milTime > 1000 && milTime < 1005){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1005 && milTime < 1050){
      document.getElementById('band').innerText = "Band: B";
    }
    else if(milTime > 1050 && milTime < 1055){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1055 && milTime < 1130){
      document.getElementById('band').innerText = "Lunch & Advisory";
    }
      else if(milTime > 1130 && milTime < 1135){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1135 && milTime < 1215){
      document.getElementById('band').innerText = "Lunch & Advisory";
    }
    else if(milTime > 1215 && milTime < 1220){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1220 && milTime < 1305){
      document.getElementById('band').innerText = "Band: C";
    }
    else if(milTime > 1305 && milTime < 1310){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1310 && milTime < 1355){
      document.getElementById('band').innerText = "Band: D";
    }
    else if(milTime > 1355 && milTime < 1400){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1400 && milTime < 1520){
      document.getElementById('band').innerText = "Minicourses";
    }
    else if(milTime > 1520){
      document.getElementById('band').innerText = "After School";
    }
    else{
      document.getElementById('band').innerText = "Passing Period";
    }
  }//end of thursday and tuesday
  
  //HALF DAYS:

  if(window.location.href == "https://slams-schedule.analyze185.repl.co/pages/halfmonday.html" || window.location.href == "https://slams-schedule.analyze185.repl.co/pages/halffriday.html" || window.location.href == "https://slams-schedule.analyze185.repl.co/pages/halfwednesday.html"){
    
    if(milTime > 815 && milTime < 855){
      document.getElementById('band').innerText = "Band: A";
    }
    else if(milTime > 855 && milTime < 900){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 900 && milTime < 940){
      document.getElementById('band').innerText = "Band: B";
    }
    else if(milTime > 940 && milTime < 945){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 945 && milTime < 1025){
      document.getElementById('band').innerText = "Rover";
    }
    else if(milTime > 1025 && milTime < 1030){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1030 && milTime < 1110){
      document.getElementById('band').innerText = "Band: C";
    }
    else if(milTime > 1110 && milTime < 1115){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1115 && milTime < 1155){
      document.getElementById('band').innerText = "Band: D";
    }
    else if(milTime > 1155 && milTime < 1200){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1200 && milTime < 1220){
      document.getElementById('band').innerText = "Advisory";
    }
    else if(milTime > 1220){
      document.getElementById('band').innerText = "After School";
    }
    else{
      document.getElementById('band').innerText = "Passing Period";
    }
  }//end of half day monday, wednesday, and tuesday

  if(window.location.href == "https://slams-schedule.analyze185.repl.co/pages/hafthursday.html" || window.location.href == "https://slams-schedule.analyze185.repl.co/pages/halftuesday.html"){
    
    if(milTime > 815 && milTime < 855){
      document.getElementById('band').innerText = "Band: C";
    }
    else if(milTime > 855 && milTime < 900){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 900 && milTime < 940){
      document.getElementById('band').innerText = "Band: D";
    }
    else if(milTime > 940 && milTime < 945){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 945 && milTime < 1025){
      document.getElementById('band').innerText = "Rover";
    }
    else if(milTime > 1025 && milTime < 1030){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1030 && milTime < 1110){
      document.getElementById('band').innerText = "Band: A";
    }
    else if(milTime > 1110 && milTime < 1115){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1115 && milTime < 1155){
      document.getElementById('band').innerText = "Band: B";
    }
    else if(milTime > 1155 && milTime < 1200){
      document.getElementById('band').innerText = "Passing Period";
    }
    else if(milTime > 1200 && milTime < 1220){
      document.getElementById('band').innerText = "Advisory";
    }
    else if(milTime > 1220){
      document.getElementById('band').innerText = "After School";
    }
    else{
      document.getElementById('band').innerText = "Passing Period";
    }
  }//end of half day monday, wednesday, and tuesday
  
  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000); 
}

currentTime();
