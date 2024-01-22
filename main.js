let hour = document.getElementById('hrs')
let minute = document.getElementById('min')
let second = document.getElementById('sec')

setInterval(()=>{

    let currentDate = new Date();
    let hours = currentDate.getHours();
    
    
    hour.innerHTML = (hours<10 ? "0" : "") + (hours%12 || 12);
    minute.innerHTML = (currentDate.getMinutes()<10 ? "0" :"") + currentDate.getMinutes();
    second.innerHTML = (currentDate.getSeconds()<10 ? "0" :"") + currentDate.getSeconds();
},1000)