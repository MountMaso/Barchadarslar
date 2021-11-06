let hour=document.querySelector('.hour');
let minute=document.querySelector('.minute');
let second=document.querySelector('.second');

let btnone=document.querySelector('.btnone');
let btntwo=document.querySelector('.btntwo');

let secondDown=function(){
    let currentTime=Number(second.textContent);
    second.textContent=currentTime+1; 
}
let minuteDown=function(){
    let MinuteTime=Number(minute.textContent);
    minute.textContent=MinuteTime+1;
}   
let hourDown=function(){
    let hourTime=Number(hour.textContent);
    hour.textContent=hourTime+1;
}
setInterval(hourDown,600000);
setInterval(minuteDown,60000);
setInterval(secondDown, 1000);  

console.log(document.date);