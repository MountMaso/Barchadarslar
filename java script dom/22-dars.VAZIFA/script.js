// let btn=document.querySelector('.btn');
// let div=document.querySelector('.big');
// let container=document.querySelector('.container');

// btn.addEventListener('click', (e)=>{
//     if(div.classList.contains('big')){
//         div.classList.remove('container');
//         btn.innerText='R';

//     }
//     else{
//         div.classList.add('witdh');
//         btn.innerText('Po');
    
//     }
// })

let btn=document.querySelector('.btn');
let div=document.querySelector('.container');

btn.addEventListener('click', (e)=>{
    console.log('OK');
    if (div.classList.contains('container')){
        div.classList.remove('container');
        div.classList.add('show-power')
    }
 
})
