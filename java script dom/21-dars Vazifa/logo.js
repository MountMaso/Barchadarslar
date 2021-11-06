let btn=document.getElementById('btn');
let scope=document.getElementById('scope');

btn.addEventListener('click', btnFunction);
function btnFunction(){
    console.log('True')
    scope.style.height="auto";
    
}