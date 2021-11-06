//classList
//classList.add('test')
//classList.remove('test')
//classList.toggle('test)
// contains('test')
let readMoreBtn=document.querySelector('.readMoreBtn');
let text=document.querySelector('.text');

readMoreBtn.addEventListener('click', (e)=>{

    if (text.classList.contains('show-more')){
            text.classList.remove('show-more');
            readMoreBtn.innerText='Read More';
    }
    else{
            text.classList.add('show-more');
            readMoreBtn.innerText='Read Less';
    }

});















// function readMoreFunction(e){
//     if(text.classList.contains('show-more')){
//         text.classList.remove('show-more');
//         readMoreBtn.innerText='Read More';
//     }
//     else{
//         text.classList.add('show-more');
//         readMoreBtn.innerText='Read Less';
//     }
// }