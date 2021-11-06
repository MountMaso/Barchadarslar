
const wrapper=document.querySelector('.wrapper'),
      inputPart=document.querySelector('.input-part'),
      infoTxt=document.querySelector('.info-txt'),
      inputField=document.querySelector('input');
const apiKey='ebad052e12f7f813020f55ff2f2b81df';
let api;

inputField.addEventListener('keyup',(e)=>{
    if(e.key=='Enter' && inputField.value!=''){
        requestApi(inputField.value);
    }
})



function requestApi(city){
    // console.log(city);
    api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api)  
    .then(response=>response.json())
    .then(data=>weatherDetail(data));
    infoTxt.innerText='Ob-xavo ma\'lumoti olinmoqda...';
    infoTxt.classList.add('pending');
}

function weatherDetail(info){
    console.log(info)
    inputField='';
    infoTxt.classList.remove('pending','error');
    wrapper.classList.add('active');
}