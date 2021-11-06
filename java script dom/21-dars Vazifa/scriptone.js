let grap=document.getElementById('grap');
let btn=document.getElementById('btn');


btn.addEventListener('click',grapFunction);
function grapFunction(){
    console.log('clik');
grap.style.height='300px';
    btn.textContent='Read Loses';

}
