let div=document.querySelector('.bigdiv');
let btn=document.querySelector('.btn');
let defoult=document.querySelector('.defoult');


btn.addEventListener('click', (e)=>{
    div.classList.contains('bigdiv')
    console.log('true');
    div.classList.remove('bigdiv');
    div.classList.add('show-power');
    btn.style.color="right";
})

defoult.addEventListener('click', (e)=>{
    console.log('defoult')
    div.classList.contains('bigdiv');
    div.classList.remove('show-power');
    div.classList.add('show-defoult');  
})