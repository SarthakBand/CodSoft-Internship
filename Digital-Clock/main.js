let HRS = document.getElementById("HRS");
let MINS = document.getElementById("MINS");
let SEC = document.getElementById("SEC");



setInterval(()=>{
 let currentTime = new Date ();
   
  HRS.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  MINS.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  SEC.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)


