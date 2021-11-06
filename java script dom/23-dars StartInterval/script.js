// function showAlert(){
//     alert('HELLO');
// }
// // showAlert();

// setInterval(showAlert, 5000);

let paragraf=document.querySelector('.count');
let start=document.querySelector('.start');
let stop=document.querySelector('.stop');
let count=0;
let    clear;

start.addEventListener('click', ()=>{
   clear= setInterval(ValueCount, 1000);
})

stop.addEventListener('click', ()=>{
    clearInterval(clear);
})
function ValueCount(){
    count++;
    paragraf.textContent=count;
    console.log(count);
}