// let button=document.getElementById('button');
// let quti=document.getElementById('quti');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
// quti.addEventListener('mouseenter',runEvent);
// quti.addEventListener('mouseout',runEvent);
// elementdan boshqa elementga otsa xam ishlaydi

// quti.addEventListener('mouseover',runEvent);
// quti.addEventListener('mouseleave',runEvent);
// faqatgina birmarta ishlaydi ya'ni obyektga kirilganda va obyektdan chiqganda
let out=document.getElementById('output');
quti.addEventListener('mousemove',runEvent);

function runEvent(e){
    console.log('EVENT Type: '+e.type);
    out.innerHTML='<h4>MouseX: '+e.offsetX+' MouseY: '+e.offsetY+'</h4>';
    quti.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}

// let itemInput=document.querySelector('input[type="text"]');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('copy',runEvent);
// let out=document.getElementById('output');
// itemInput.addEventListener('input',runEvent);

// function runEvent(e){
//     // console.log('Event Type: '+e.type);
//     console.log(e.target.value);
//     out.innerHTML='<h4>'+e.target.value+'</h4>';
// }